import type { NextPage } from "next";

const TitleFrame: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-xs text-black1 font-poppins">
      <div className="my-0 mx-[!important] absolute right-[4px] bottom-[-76px] w-[394px] flex flex-col items-start justify-center pt-0 px-0 pb-1 box-border max-w-full">
        <button className="cursor-pointer [border:none] py-1 pr-[22px] pl-[21px] bg-orange my-0 mx-[!important] absolute right-[0px] bottom-[0px] rounded-31xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] w-[110px] flex flex-row items-center justify-center box-border z-[3] hover:bg-darkgoldenrod">
          <b className="flex-1 relative text-lg flex font-poppins text-white text-center items-center justify-center h-8">
            Next
          </b>
        </button>
        <div className="relative flex items-center w-[386px] h-[200px] shrink-0 max-w-full z-[4]">
          <span className="w-full">
            <p className="m-0">
              <span>
                <span className="font-poppins text-black1">
                  Individuals with the following conditions are
                </span>
                <span className="text-red">
                  <b className="font-poppins">{` NOT `}</b>
                </span>
              </span>
              <span>
                <span>
                  <span className="text-red">recommended</span>
                </span>
                <span>
                  <span>
                    {" "}
                    to follow a diet consisting of less than 3 meals per day.
                  </span>
                </span>
              </span>
            </p>
            <p className="m-0 text-mini">
              <span>
                <span>
                  <span>1. Eating Disorder</span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  <span>{`2. Type 1 & Type 2 Diabetes`}</span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  <span>3. Pregnant / Breastfeeding</span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  <span>4. Weight Gain Diet</span>
                </span>
              </span>
            </p>
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start max-w-full text-lg">
        <div className="w-[374px] flex flex-col items-start justify-start gap-[14px] max-w-full">
          <div className="relative font-semibold flex items-center h-5 shrink-0 z-[3]">
            Gender
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center min-w-[117px] z-[3]">
              <div className="flex-1 flex flex-row items-center justify-center">
                <div className="relative rounded box-border w-[186px] h-[54px] hidden border-[3px] border-solid border-black-20" />
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
                    Male
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
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center min-w-[117px] z-[3]">
              <div className="flex-1 flex flex-row items-center justify-center">
                <div className="relative rounded box-border w-[185px] h-[54px] hidden border-[3px] border-solid border-black-20" />
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
                    Female
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleFrame;
