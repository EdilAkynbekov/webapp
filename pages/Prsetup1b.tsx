import type { NextPage } from "next";
import { useCallback } from "react";
import TEXT1 from "../components/text1";

const Setup1a: NextPage = () => {
  const onSignOutContainerClick = useCallback(() => {
    // Please sync "Profile Setup 1" to the project
  }, []);

  return (
    <footer className="w-full relative bg-saddlebrown overflow-hidden flex flex-col items-center justify-start pt-[100px] px-5 pb-[50px] box-border gap-[50px] tracking-[normal] mq700:gap-[25px]">
      <section className="self-stretch rounded-xl bg-white overflow-y-auto flex flex-col items-start justify-start py-5 px-0 box-border gap-[20px] max-w-full text-left text-lg text-black font-poppins">
        <div className="h-[46px] shrink-0 flex flex-row items-start justify-start py-0 px-20 box-border">
          <div
            className="flex flex-row items-center justify-center pt-1 pb-[3px] pr-1 pl-[3px] cursor-pointer"
            onClick={onSignOutContainerClick}
          >
            <img
              className="h-[33.3px] w-[33.2px] relative"
              loading="eager"
              alt=""
              src="/subtract.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full">
          <div className="w-[791px] h-5 relative font-semibold flex items-center shrink-0 max-w-full">
            Tell us more about you
          </div>
          <TEXT1 />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[70px]">
          <button className="cursor-pointer [border:none] p-1 bg-orange w-[103px] rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border hover:bg-darkgoldenrod">
            <b className="h-[27px] w-[67px] relative text-lg flex font-poppins text-white text-center items-center justify-center">
              Next
            </b>
          </button>
        </div>
      </section>
      <div className="w-[481px] flex flex-col items-start justify-start min-h-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[5px] pl-0 gap-[20px] z-[1] mq450:flex-wrap">
          <div className="h-5 w-5 relative rounded-[50%] bg-orange" />
          <div className="h-5 w-5 relative rounded-[50%] bg-silver" />
          <div className="h-5 w-5 relative rounded-[50%] bg-silver" />
          <div className="h-5 w-5 relative rounded-[50%] bg-silver" />
          <div className="h-5 w-5 relative rounded-[50%] bg-silver" />
          <div className="h-5 w-5 relative rounded-[50%] bg-silver" />
          <div className="h-5 w-5 relative rounded-[50%] bg-silver" />
          <div className="h-5 w-5 relative rounded-[50%] bg-silver" />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 [row-gap:20px] mt-[-13px]">
          <div className="h-1.5 flex-1 relative rounded-xl bg-silver min-w-[67px] max-w-[69px]" />
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[67px] max-w-[68px]">
            <div className="self-stretch h-1.5 relative rounded-xl bg-silver" />
          </div>
          <div className="h-1.5 flex-1 relative rounded-xl bg-silver min-w-[67px] max-w-[69px]" />
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[67px] max-w-[68px]">
            <div className="self-stretch h-1.5 relative rounded-xl bg-silver" />
          </div>
          <div className="h-1.5 flex-1 relative rounded-xl bg-silver min-w-[67px] max-w-[69px]" />
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[67px] max-w-[68px]">
            <div className="self-stretch h-1.5 relative rounded-xl bg-silver" />
          </div>
          <div className="h-1.5 flex-1 relative rounded-xl bg-silver min-w-[67px] max-w-[69px]" />
        </div>
      </div>
    </footer>
  );
};

export default Setup1a;
