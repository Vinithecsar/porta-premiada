export function Presente() {
  return (
    <>
      {/* Presente */}
      <div className="relative flex flex-col items-center">
        {/* Tampa */}
        <div className="w-[100px] h-[25px] bg-[#7aa944]"></div>
        {/* Caixa */}
        <div className="w-[90px] h-[60px] bg-[#5c7e32]"></div>
        {/* Laço 1 */}
        <div className="absolute w-[15px] h-[85px] bg-[red]"></div>
        {/* Laço 2 */}
        <div className="absolute top-[40px] w-[90px] h-[15px] bg-[red]"></div>
      </div>
    </>
  );
}
