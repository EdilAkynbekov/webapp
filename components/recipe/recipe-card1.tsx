import type { NextPage } from "next";

const RecipeCard1: NextPage = () => {
  return (
    <div className="h-[300px] w-[234px] rounded-xl bg-gray-300 flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[13px] text-left text-xs text-saddlebrown font-poppins">
      <div className="self-stretch flex flex-col items-end justify-start">
        <button className="cursor-pointer py-1.5 pr-4 pl-[15px] bg-black rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-end whitespace-nowrap border-[0.5px] border-solid border-gray-200 hover:bg-darkslategray-100 hover:box-border hover:border-[0.5px] hover:border-solid hover:border-darkslategray-200">
          <div className="relative text-xs font-semibold font-poppins text-orange text-center">
            Normal | 20 mins
          </div>
        </button>
      </div>
      <div className="flex flex-row items-center justify-start py-0 pr-[22px] pl-2.5">
        <div className="relative font-semibold">
          Vegetarian | Vegan | High Protein
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-0 px-2.5 bg-[transparent] self-stretch flex-1 flex flex-col items-start justify-center">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/copy-of-dscf7458-1@2x.png"
        />
      </button>
      <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-2.5 text-lg text-black">
        <h3 className="m-0 h-[86px] flex-1 relative text-inherit tracking-[-0.02em] leading-[18.07px] capitalize font-semibold font-inherit inline-block">{`Tomato pasta with tomato cream `}</h3>
      </div>
    </div>
  );
};

export default RecipeCard1;
