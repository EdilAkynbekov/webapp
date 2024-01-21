import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FrameComponent1Type = {
  emailAddress?: string;
  youWorkAJobWithLightPhysi?: string;
  youDoIntentionalExerciseE?: string;
  youSpendMajorityOfYourDay?: string;

  /** Style props */
  indicatorMinHeight?: CSSProperties["minHeight"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  emailAddress,
  youWorkAJobWithLightPhysi,
  youDoIntentionalExerciseE,
  youSpendMajorityOfYourDay,
  indicatorMinHeight,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: indicatorMinHeight,
    };
  }, [indicatorMinHeight]);

  const youWorkAContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xs text-black1 font-poppins"
      style={frameDivStyle}
    >
      <div className="w-[808px] flex flex-row flex-wrap items-center justify-start gap-[24px] max-w-full">
        <button className="cursor-pointer [border:none] py-5 px-0 bg-[transparent] w-[200px] flex flex-row items-center justify-center box-border z-[3]">
          <div className="flex-1 flex flex-row items-center justify-center">
            <div className="relative rounded box-border w-[206px] h-[54px] hidden border-[3px] border-solid border-black-20" />
            <div className="h-3.5 hidden flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[3px]">
              <img
                className="relative w-[13px] h-[13px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/exclamation.svg"
              />
              <div className="self-stretch relative text-xs leading-[120%] font-body text-black-60 text-left">
                Message
              </div>
            </div>
            <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-center p-[13px] border-[1px] border-solid border-black-20">
              <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/email-mail.svg"
                />
              </div>
              <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
              <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
                {emailAddress}
              </div>
              <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
              <div className="relative rounded-12xs w-[219px] h-[22px] hidden" />
              <img
                className="relative w-[18px] h-[18px] hidden"
                alt=""
                src="/arrow-down.svg"
              />
            </div>
          </div>
        </button>
        <div
          className="flex-1 relative flex items-center h-[90px] min-w-[296px] max-w-full z-[3]"
          style={youWorkAContainerStyle}
        >
          <ul className="m-0 font-inherit text-inherit pl-4">
            <li className="mb-0">{youWorkAJobWithLightPhysi}</li>
            <li className="mb-0">{youDoIntentionalExerciseE}</li>
            <li>{youSpendMajorityOfYourDay}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
