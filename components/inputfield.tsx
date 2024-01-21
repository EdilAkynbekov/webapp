import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type InputfieldType = {
  title?: string;
  exclamation?: string;
  emailMail?: string;
  emailAddress?: string;
  arrowDown?: string;
  emailMail1?: string;
  emailAddress1?: string;
  arrowDown1?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propFlex2?: CSSProperties["flex"];
  propFlex3?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFlex4?: CSSProperties["flex"];
  propFlex5?: CSSProperties["flex"];
};

const Inputfield: NextPage<InputfieldType> = ({
  title,
  exclamation,
  emailMail,
  emailAddress,
  arrowDown,
  emailMail1,
  emailAddress1,
  arrowDown1,
  propFlex,
  propMinWidth,
  propFlex1,
  propFlex2,
  propFlex3,
  propMinWidth1,
  propFlex4,
  propFlex5,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const inputField1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const fieldStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const inputField2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex3,
      minWidth: propMinWidth1,
    };
  }, [propFlex3, propMinWidth1]);

  const inputField3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex4,
    };
  }, [propFlex4]);

  const field1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex5,
    };
  }, [propFlex5]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-left text-lg text-black1 font-poppins">
      <div className="relative font-semibold flex items-center h-5 shrink-0 z-[3]">
        {title}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-xs text-black-60 font-body mq450:flex-wrap">
        <div
          className="flex flex-row items-center justify-center z-[3]"
          style={inputFieldStyle}
        >
          <div
            className="flex flex-row items-center justify-center"
            style={inputField1Style}
          >
            <div className="relative rounded box-border w-[186px] h-[54px] hidden border-[3px] border-solid border-black-20" />
            <div className="h-3.5 hidden flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[3px]">
              <img
                className="relative w-[13px] h-[13px] overflow-hidden shrink-0 hidden"
                alt=""
                src={exclamation}
              />
              <div className="self-stretch relative leading-[120%]">
                Message
              </div>
            </div>
            <div
              className="rounded overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[70px] pl-[71px] text-base border-[1px] border-solid border-black-20"
              style={fieldStyle}
            >
              <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src={emailMail}
                />
              </div>
              <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
              <div className="relative leading-[140%]">{emailAddress}</div>
              <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
              <div className="relative rounded-12xs w-[219px] h-[22px] hidden" />
              <img
                className="relative w-[18px] h-[18px] hidden"
                alt=""
                src={arrowDown}
              />
            </div>
          </div>
        </div>
        <div
          className="flex-1 flex flex-row items-center justify-center min-w-[116px] z-[3]"
          style={inputField2Style}
        >
          <div
            className="flex-1 flex flex-row items-center justify-center"
            style={inputField3Style}
          >
            <div className="relative rounded box-border w-[185px] h-[54px] hidden border-[3px] border-solid border-black-20" />
            <div className="h-3.5 hidden flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[3px]">
              <img
                className="relative w-[13px] h-[13px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/exclamation-3.svg"
              />
              <div className="self-stretch relative leading-[120%]">
                Message
              </div>
            </div>
            <div
              className="flex-1 rounded overflow-hidden flex flex-row items-center justify-center p-[13px] text-base border-[1px] border-solid border-black-20"
              style={field1Style}
            >
              <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src={emailMail1}
                />
              </div>
              <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
              <div className="relative leading-[140%]">{emailAddress1}</div>
              <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
              <div className="relative rounded-12xs w-[219px] h-[22px] hidden" />
              <img
                className="relative w-[18px] h-[18px] hidden"
                alt=""
                src={arrowDown1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inputfield;
