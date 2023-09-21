interface EntradaNumericaProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function EntradaNumerica(props: EntradaNumericaProps) {
  const dec = () => props.onChange(props.value - 1);
  const inc = () => props.onChange(props.value + 1);
  const button_css =
    'flex justify-center items-center text-[3rem] h-[80px] w-[80px] m-[5px] border-none';

  return (
    <>
      {/* Area */}
      <div
        className={
          'flex text-[black] flex-col items-center justify-center flex-1'
        }
      >
        {/* Text, Value, Botoes */}
        <span className={'color-[#555] text-[1.5rem]'}>{props.text}</span>
        <span className={'text-[6rem]'}>{props.value}</span>
        <div className={'flex'}>
          <button className={button_css} onClick={dec}>
            -
          </button>
          <button className={button_css} onClick={inc}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
