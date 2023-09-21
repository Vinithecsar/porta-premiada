'use client';

import Card from '@/components/Card';
import { EntradaNumerica } from '@/components/EntradaNumerica';
import Link from 'next/link';
import { useState } from 'react';

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={'flex flex-col justify-center items-center h-[100vh]'}>
      <div className={'flex'}>
        <Card bgcolor="bg-[#c0392c]">
          <h1 className="text-6xl">
            <b>Monty Hall</b>
          </h1>
        </Card>
        <Card>
          <EntradaNumerica
            text="Qtde Portas?"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Card>
      </div>
      <div className={'flex'}>
        <Card>
          <EntradaNumerica
            text="Porta com presente?"
            value={comPresente}
            onChange={(novaPortaComPresente) =>
              setComPresente(novaPortaComPresente)
            }
          />
        </Card>
        <Card bgcolor="bg-[#27a085]">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            {/* Link */}
            <h2 className={'text-5xl flex-1 m-1 cursor-pointer'}>
              <b>Iniciar</b>
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
