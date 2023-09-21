'use client';

import { Porta } from '@/components/Porta';
import { atualizarPortas, criarPortas } from '@/functions/portas';
import PortaModel from '@/model/porta';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface JogoProps {
  params: {
    portas: string;
    temPresente: string;
  };
}

export default function Jogo({ params }: JogoProps) {
  const [valido, setValido] = useState<boolean>();
  const [portas, setPortas] = useState<PortaModel[]>([]);

  useEffect(() => {
    const portas = +params.portas;
    const temPresente = +params.temPresente;
    const qtdePortasValidas = portas >= 3 && portas <= 50;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;

    setValido(qtdePortasValidas && temPresenteValido);
  }, [portas, params.portas, params.temPresente]);

  useEffect(() => {
    const portas = +params.portas;
    const temPresente = +params.temPresente;
    setPortas(criarPortas(portas, temPresente));
  }, [params]);

  function renderizarPortas() {
    return portas.map((porta: PortaModel) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <>
      {/* Jogo */}
      <div className={'flex flex-col  justify-center items-center h-[100vh]'}>
        {/* Portas */}
        <div className={'flex self-stretch justify-around flex-wrap'}>
          {valido ? (
            renderizarPortas()
          ) : (
            <h1 className="text-2xl">Valores inválidos</h1>
          )}
        </div>
        {/* Botoes */}
        <div className={'flex justify-center mt-[40px]'}>
          <Link href={'/'}>
            <button
              className={
                'bg-[#c0392c] text-[#fff] text-[2rem] border-none py-[10px] px-[25px]'
              }
            >
              Reiniciar Jogo
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
