import type { NextPage } from "next";

const Facebook: NextPage = () => {
  return (
    <div className="rounded-4xs bg-white box-border w-[203.3px] h-[49px] flex flex-row items-center justify-start py-0 pr-[12.839153289794922px] pl-[12.839160919189453px] gap-[6px] text-left text-xs text-black1 font-poppins border-[1px] border-solid border-black1">

      <img
        className="relative w-[26.7px] h-[27.2px] object-cover"
        alt=""
        src="/facebook-1@2x.png"
      />
      <div className="relative flex items-center w-[144.4px] h-[19.6px] shrink-0">{`Sign in with Facebook `}</div>
    </div>
  );
};

export default Facebook;
