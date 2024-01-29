import type { NextPage } from "next";

const TitleInputField: NextPage = () => {
  return (
    <div className="w-[375px] flex flex-col items-start justify-start gap-[34px] min-w-[375px] max-w-full text-left text-lg text-black1 font-poppins mq725:min-w-full mq450:gap-[17px] mq1000:flex-1">
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="w-[205px] h-5 relative font-semibold flex items-center shrink-0">
          Phone Number
        </div>
        <div className="self-stretch flex flex-row items-center justify-center max-w-full text-xs text-black-60 font-body">
          <div className="h-[54px] w-[381px] relative rounded box-border hidden max-w-full border-[3px] border-solid border-black-20" />
          <div className="h-3.5 hidden flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[3px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/exclamation.svg"
            />
            <div className="self-stretch relative leading-[120%]">Message</div>
          </div>
          <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-start justify-start py-[13px] pr-[17px] pl-[15px] [row-gap:20px] max-w-full border-[1px] border-solid border-black-20 mq450:flex-wrap">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/email-mail.svg"
              />
            </div>
            <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
            <input
              className="w-[113px] [border:none] [outline:none] font-body text-base bg-[transparent] h-[22px] relative leading-[140%] text-black-60 text-left inline-block"
              placeholder="Phone Number"
              type="text"
            />
            <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
            <div className="h-[22px] flex-1 relative rounded-12xs min-w-[149px]" />
            <img
              className="h-[18px] w-[18px] relative hidden"
              alt=""
              src="/arrow-down.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="w-[205px] h-5 relative font-semibold flex items-center shrink-0">
          Birthday
        </div>
        <div className="self-stretch flex flex-row items-center justify-center max-w-full text-xs text-black-60 font-body">
          <div className="flex-1 flex flex-row items-center justify-center max-w-full">
            <div className="h-[54px] w-[381px] relative rounded box-border hidden max-w-full border-[3px] border-solid border-black-20" />
            <div className="h-3.5 hidden flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[3px]">
              <img
                className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/exclamation.svg"
              />
              <div className="self-stretch relative leading-[120%]">
                Message
              </div>
            </div>
            <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-[13px] pr-[17px] pl-[15px] [row-gap:20px] max-w-full border-[1px] border-solid border-black-20 mq450:flex-wrap">
              <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/email-mail.svg"
                />
              </div>
              <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
              <input
                className="w-[97px] [border:none] [outline:none] font-body text-base bg-[transparent] h-[22px] relative leading-[140%] text-black-60 text-left inline-block"
                placeholder="Date of Birth"
                type="text"
              />
              <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
              <div className="h-[22px] flex-1 relative rounded-12xs min-w-[148px]" />
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/calendar.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
        <div className="w-[205px] h-5 relative font-semibold flex items-center shrink-0">
          Gender
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
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
              <div className="rounded overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[70px] pl-[71px] border-[1px] border-solid border-black-20">
                <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/email-mail.svg"
                  />
                </div>
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
                  Male
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
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center min-w-[116px]">
            <div className="flex-1 flex flex-row items-center justify-center">
              <div className="h-[54px] w-[185px] relative rounded box-border hidden border-[3px] border-solid border-black-20" />
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
              <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-center p-[13px] border-[1px] border-solid border-black-20">
                <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/email-mail.svg"
                  />
                </div>
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
                  Female
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
      </div>
    </div>
  );
};

export default TitleInputField;
