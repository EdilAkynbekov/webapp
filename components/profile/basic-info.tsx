import React from "react";

const BasicInfo = () => {
  return (
    <div className="self-stretch rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start p-5 gap-[10px]">
      <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
        <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
          <div className="relative font-semibold">Basic Information</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-center py-[5px] px-0">
          <div className="flex-1 flex flex-col items-end justify-center">
            <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-black1 w-[100px] rounded-81xl flex flex-row items-center justify-center box-border text-white hover:bg-slate-200 hover:text-black1">
              <b className="relative text-base font-poppins  text-center">
                Edit
              </b>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[8px] text-left text-[11px] xl:text-sm text-[#565657]">
        <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Birthday
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              2002-04-14
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Age
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              21
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Gender
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              Male
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Height (cm)
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              180
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Smoking
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              Yes
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center text-[10px] xl:text-[14px]">
              Alcohol intake
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              Occasional
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
        <div className="relative font-semibold">Contact Information</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-left text-[11px] xl:text-sm text-[#565657]">
        <div className="flex-1 md:max-w-[150px] lg:max-w-[300px] rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className=" self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Phone
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              98758390
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[400px] self-stretch rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Email Address
            </b>
          </div>
          <div className="self-stretch  relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">{`adamsmith@gmail.com `}</div>
          </div>
        </div>
        <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[100px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Home Address
            </b>
          </div>
          <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] leading-[18.07px] font-semibold inline-block">
              47 Apple Street, Causeway Bay 47 Apple Street, Causeway Bay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
