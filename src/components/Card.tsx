interface CardProps {
  bgcolor?: string;
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div
      className={`flex w-[300px] h-[300px] ${
        props.bgcolor ?? 'bg-[white]'
      } text-[2rem] p-[20px] m-[3px] justify-center items-center `}
    >
      {props.children}
    </div>
  );
}
