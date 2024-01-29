import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type InnerFrameType = {
  title?: string;
  emailAddress?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const InnerFrame: NextPage<InnerFrameType> = ({
  title,
  emailAddress,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const innerFrameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className="w-[180px] flex flex-col items-start justify-start gap-[14px] text-left text-lg text-black1 font-poppins"
      style={innerFrameStyle}
    >
      <div className="self-stretch relative font-semibold">{title}</div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <div className="h-[54px] w-[186px] relative rounded box-border hidden border-[3px] border-solid border-black-20" />
          <div className="h-3.5 hidden flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[3px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/exclamation.svg"
            />
            <div className="self-stretch relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="rounded overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[43px] pl-[46px] border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/email-mail.svg"
              />
            </div>
            <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              {emailAddress}
            </div>
            <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
            <div className="h-[22px] w-[219px] relative rounded-12xs hidden" />
            <img
              className="h-[18px] w-[18px] relative hidden"
              alt=""
              src="/arrow-down.svg"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default InnerFrame;
