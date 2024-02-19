import React from "react";

const BasicInfo = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] text-center text-base text-black1">
      <div className="self-stretch rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start p-[15px] gap-[10px_0px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_5px]">
          <div className="w-[154px] flex flex-row items-center justify-start py-[5px] px-0 box-border">
            <div className="relative font-semibold">Basic Information</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-[5px] px-0">
            <div className="flex-1 flex flex-col items-end justify-center">
              <button className="cursor-pointer [border:none] py-[5px] px-[30px] bg-black1 rounded-81xl flex flex-row items-center justify-center">
                <b className="relative text-3xs font-poppins text-white text-center">
                  Edit
                </b>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-between text-left text-3xs text-white">
          <div className="w-[140px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] mb-3 px-2 box-border">
            <div className="self-stretch relative h-3.5">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Birthday
              </b>
            </div>
            <div className="self-stretch relative h-[15px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                2002-04-14
              </div>
            </div>
          </div>
          <div className="w-[140px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] px-2 box-border">
            <div className="self-stretch relative h-3.5">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Age
              </b>
            </div>
            <div className="self-stretch relative h-[15px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                21
              </div>
            </div>
          </div>
          <div className="w-[140px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] px-2 box-border mb-3">
            <div className="self-stretch relative h-3.5">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Gender
              </b>
            </div>
            <div className="self-stretch relative h-[15px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                Male
              </div>
            </div>
          </div>
          <div className="w-[140px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] px-2 box-border">
            <div className="self-stretch relative h-3.5">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Height (cm)
              </b>
            </div>
            <div className="self-stretch relative h-[15px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                180
              </div>
            </div>
          </div>
          <div className="w-[140px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] px-2 box-border">
            <div className="self-stretch relative h-3.5">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Smoking
              </b>
            </div>
            <div className="self-stretch relative h-[15px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                Yes
              </div>
            </div>
          </div>
          <div className="w-[140px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] px-2 box-border">
            <div className="self-stretch relative h-3.5">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Alcohol intake
              </b>
            </div>
            <div className="self-stretch relative h-[15px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                Occasional
              </div>
            </div>
          </div>
        </div>
        <div className="w-[254px] flex flex-row items-center justify-start py-[5px] px-0 box-border">
          <div className="relative font-semibold">Contact Information</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-3xs text-white">
          <div className="w-[130px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
            <div className="self-stretch relative h-[22px]">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Phone
              </b>
            </div>
            <div className="self-stretch relative h-[23px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                98758390
              </div>
            </div>
          </div>
          <div className="w-[210px] rounded-3xs bg-gray-400 h-[45px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
            <div className="self-stretch relative h-[22px]">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Email Address
              </b>
            </div>
            <div className="self-stretch relative h-[23px] text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">{`adamsmith@gmail.com `}</div>
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-gray-400 h-[90px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border text-[11px]">
            <div className="self-stretch relative h-[22px]">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Home Address
              </b>
            </div>
            <div className="self-stretch flex-1 relative text-xs text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] leading-[18.07px] font-semibold inline-block">
                47 Apple Street, Causeway Bay 47 Apple Street, Causeway Bay
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
