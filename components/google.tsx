import type { NextPage } from "next";

const Google: NextPage = () => {
  return (
    <div className="rounded-4xs bg-white box-border w-[203.3px] h-[49px] flex flex-row items-center justify-start py-0 px-[11.769230842590332px] gap-[19px] text-left text-xs text-black1 font-poppins border-[1px] border-solid border-black1">

      <img
        className="relative w-[26.7px] h-[27.2px] object-cover"
        alt=""
        src="/search-3@2x.png"
      />
      <div className="relative flex items-center w-[128.4px] h-[19.6px] shrink-0">{`Sign in with Google `}</div>
    </div>
  );
};

export default Google;
