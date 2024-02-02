import type { NextPage } from "next";
import FrameComponent from "./FrameSetup1";

const TEXT1: NextPage = () => {
  return (
    <form className="m-0 self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-20 box-border gap-[80px] max-w-full mq700:gap-[20px] mq975:gap-[40px] mq975:pl-10 mq975:pr-10 mq975:box-border">
      <div className="flex-1 flex flex-col items-start justify-start min-w-[231px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-[5px] pb-[26px] gap-[3px]">
          <div className="self-stretch relative text-lg font-semibold font-poppins text-orange text-left">
            Birthday
          </div>
          <div className="self-stretch rounded-8xs flex flex-row items-center justify-between py-2.5 pr-[30px] pl-2.5 gap-[20px] whitespace-nowrap border-[1px] border-solid border-gray">
            <div className="h-6 relative text-base font-poppins text-gray text-left flex items-center">
              Select Date
            </div>
            <img
              className="h-[18.5px] w-[18.5px] relative"
              alt=""
              src="/i-n-s-t-a-n-c-e.svg"
            />
          </div>
          <div className="self-stretch relative text-xs font-poppins text-black text-left hidden">
            Info Text
          </div>
        </div>
        <FrameComponent
          label="Phone Number"
          enterInputPlaceholder="XXXX XXXX"
          propHeight="27px"
          propDisplay="flex"
          propColor="#000"
        />
        <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[7px]">
          <div className="self-stretch h-[27px] relative text-lg font-semibold font-poppins text-orange text-left flex items-center">
            Gender
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[30px] mq450:flex-wrap">
            <button className="cursor-pointer py-2.5 px-5 bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center min-w-[103px] border-[1px] border-solid border-white hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro">
              <div className="w-[75px] h-6 relative text-base font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                Male
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-[30px] bg-white flex-[0.8273] rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center min-w-[103px] border-[1px] border-solid border-white hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro mq450:flex-1">
              <div className="w-[79px] h-6 relative text-base font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                Female
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[231px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start p-[5px] box-border gap-[3px] max-w-full">
          <div className="self-stretch relative text-lg font-semibold font-poppins text-orange text-left">
            Height (cm)
          </div>
          <div className="self-stretch rounded-8xs box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] max-w-full border-[1px] border-solid border-gray">
            <input
              className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 flex-1 relative text-gray text-left flex items-center min-w-[195px] max-w-full"
              placeholder="0"
              type="text"
            />
          </div>
          <div className="self-stretch h-[18px] relative text-xs font-poppins text-left flex items-center">
            Info Text
          </div>
        </div>
        <FrameComponent
          label="Weight (kg)"
          enterInputPlaceholder="0"
          propHeight="unset"
          propDisplay="inline-block"
          propColor="unset"
        />
        <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[7px]">
          <div className="self-stretch relative text-lg font-semibold font-poppins text-orange text-left">
            Number of Meals Per Day
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[15px] mq450:flex-wrap">
            <div className="flex-1 rounded-8xs bg-white shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start py-2.5 px-5 min-w-[56px] max-w-[75px] border-[1px] border-solid border-white">
              <div className="h-[27px] relative text-lg font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                2
              </div>
            </div>
            <div className="flex-[0.2749] rounded-8xs bg-white shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start py-2.5 pr-11 pl-5 min-w-[56px] max-w-[75px] border-[1px] border-solid border-white mq450:flex-1">
              <input
                className="w-full [border:none] [outline:none] font-semibold font-poppins text-lg bg-[transparent] self-stretch h-[27px] relative text-darkslategray text-center flex items-center justify-center min-w-[7px]"
                placeholder="3"
                type="text"
              />
            </div>
            <div className="flex-1 rounded-8xs bg-white shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start py-2.5 px-5 min-w-[56px] max-w-[75px] border-[1px] border-solid border-white">
              <div className="h-[27px] relative text-lg font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                4
              </div>
            </div>
            <div className="flex-1 rounded-8xs bg-white shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start py-2.5 px-5 min-w-[56px] max-w-[75px] border-[1px] border-solid border-white">
              <div className="h-[27px] relative text-lg font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-left">
          <p className="m-0">
            <span className="text-xs">
              <span className="font-poppins text-black">
                Individuals with the following conditions are
              </span>
              <span className="text-red">
                <b className="font-poppins">{` NOT `}</b>
              </span>
            </span>
            <span className="font-poppins">
              <span className="text-xs">
                <span className="text-red">recommended</span>
              </span>
              <span className="text-black">
                <span className="text-xs">
                  {" "}
                  to follow a diet consisting of less than 3 meals per day.
                </span>
              </span>
            </span>
          </p>
          <p className="m-0">
            <span className="font-poppins">
              <span className="text-black">
                <span className="text-mini">1. Eating Disorder</span>
              </span>
            </span>
          </p>
          <p className="m-0">
            <span className="font-poppins">
              <span className="text-black">
                <span className="text-mini">{`2. Type 1 & Type 2 Diabetes`}</span>
              </span>
            </span>
          </p>
          <p className="m-0">
            <span className="font-poppins">
              <span className="text-black">
                <span className="text-mini">3. Pregnant / Breastfeeding</span>
              </span>
            </span>
          </p>
          <p className="m-0">
            <span className="font-poppins">
              <span className="text-black">
                <span className="text-mini">4. Weight Gain Diet</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default TEXT1;
