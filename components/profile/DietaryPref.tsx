import React from "react";

const DietaryPref = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] text-base text-black1">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px]">
        <div className="self-stretch rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start p-[15px] gap-[10px_0px]">
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="w-[154px] flex flex-row items-center justify-start py-[5px] px-0 box-border">
              <div className="relative font-semibold">Dietary Preferences</div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-center py-[5px] px-0">
              <button className="cursor-pointer [border:none] py-[5px] px-[30px] bg-black1 rounded-81xl flex flex-row items-center justify-center">
                <b className="relative text-3xs font-poppins text-white text-center">
                  Edit
                </b>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px_0px] text-left text-3xs text-floralwhite">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px_0px]">
              <div className="self-stretch rounded-3xs bg-gray-400 h-[50px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                <div className="self-stretch relative h-[22px]">
                  <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                    Dietary Type
                  </b>
                </div>
                <div className="self-stretch relative h-[23px] text-xs text-black1">
                  <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                    High Protein
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-gray-400 h-[50px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                <div className="self-stretch relative h-[22px]">
                  <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                    Meals Per Day
                  </b>
                </div>
                <div className="self-stretch relative h-[23px] text-xs text-black1">
                  <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-gray-400 h-[70px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
              <div className="self-stretch relative h-[22px]">
                <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                  Cooking Equipment
                </b>
              </div>
              <div className="self-stretch flex-1 relative text-xs text-black1">
                <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                  Rice Cooker, Oven, Blender, Air Fryer
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-gray-400 h-[130px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
              <div className="self-stretch relative h-[22px]">
                <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                  Food Preferences
                </b>
              </div>
              <div className="self-stretch flex-1 relative text-xs text-black1">
                <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                  Beef, Chicken, Fish, Rice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietaryPref;
