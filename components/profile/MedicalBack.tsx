import React from "react";

const MedicalBack = () => {
  return (
    <div className="flex-1 rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-5 px-5 pb-[30px] gap-[10px]">
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
          <div className="relative font-semibold">Medical Background</div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center py-[5px] px-0">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-black1 w-[100px] rounded-81xl flex flex-row items-center text-white justify-center box-border hover:bg-slate-200 hover:text-black1">
            <b className="relative text-base font-poppins text-center">Edit</b>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-sm ">
        <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Medical History
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              None
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Allergy
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              Nuts, Dairy
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Medication
            </b>
          </div>
          <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              None
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[150px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Supplement Intake
            </b>
          </div>
          <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              Omega-3 Fatty Acid | 640mg, Vitamin D3 | 125 mcg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBack;
