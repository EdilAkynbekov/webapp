import React from "react";

const DietaryPref = () => {
  return (
    <div className="flex-1 rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-5 px-5 pb-[30px] gap-[10px]">
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
          <div className="relative font-semibold">Dietary Preferences</div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center py-[5px] px-0">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-black1 w-[100px] rounded-81xl flex flex-row items-center justify-center box-border text-white hover:bg-slate-200 hover:text-black1">
            <b className="relative text-base font-poppins  text-center">Edit</b>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-sm text-floralwhite">
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="w-[50%] rounded-3xs bg-[#FFB527] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
            <div className="flex-1 self-stretch relative h-[22px]">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Dietary Type
              </b>
            </div>
            <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                High Protein
              </div>
            </div>
          </div>
          <div className="flex-1 w-[50%] self-stretch ml-4 rounded-3xs bg-[#FFB527] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
            <div className="self-stretch relative h-[22px]">
              <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                Meals Per Day
              </b>
            </div>
            <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
              <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-[#FFB527] h-20 flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Cooking Equipment
            </b>
          </div>
          <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              Rice Cooker, Oven, Blender, Air Fryer
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-[#FFB527] h-[150px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
          <div className="self-stretch relative h-[22px]">
            <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
              Food Preferences
            </b>
          </div>
          <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
            <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
              Beef, Chicken, Fish, Rice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietaryPref;
