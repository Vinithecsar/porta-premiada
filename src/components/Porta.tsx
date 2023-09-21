import PortaModel from '@/model/porta';
import { Presente } from './Presente';

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export function Porta(props: PortaProps) {
  const porta = props.value;
  const selecionada: any[] =
    porta.selecionada && !porta.aberta
      ? ['border-[yellow]', 'bg-[yellow]', 'text-[yellow]']
      : ['border-[brown]', 'bg-[brown]', ''];

  const alternarSelecao = (_e: any) => props.onChange(porta.alternarSelecao());
  const abrir = (e: any) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  };

  function renderizarPorta() {
    return (
      <>
        {/* Porta */}
        <div className="flex flex-col items-center grow p-[15px] bg-[chocolate]">
          {/* Numero */}
          <div className={`text-[3rem] ${selecionada[2]}`}>{porta.numero}</div>
          {/* Maçaneta */}
          <div
            onClick={abrir}
            className={`absolute self-start top-[calc(0.45*var(--area-porta-altura))] h-[20px] w-[20px] rounded-[10px] ${selecionada[1]}`}
          ></div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Area */}
      <div
        onClick={alternarSelecao}
        className="relative flex flex-col items-center w-[var(--area-porta-largura)] h-[var(--area-porta-altura)] m-[5px]"
      >
        {/* Estrutura */}
        <div
          className={`flex flex-col-reverse grow border-x-[5px] border-t-[5px]  w-[90%] ${selecionada[0]} bg-[#0005]`}
        >
          {porta.fechada ? (
            renderizarPorta()
          ) : porta.temPresente ? (
            <Presente />
          ) : (
            false
          )}
        </div>

        {/* Chão */}
        <div className="h-[10px] w-[100%] bg-[#ddd]"></div>
      </div>
    </>
  );
}
