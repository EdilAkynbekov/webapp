import React, { useState } from "react";
import { ActivityLevel } from "../FrameSetup5";
interface IProps {
  setActivityLevel: (value: React.SetStateAction<any[]>) => void;
  activityLevel: ActivityLevel[];
}
const AddOtherBox = (props: IProps) => {
  const { setActivityLevel } = props;
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };
  return (
    <div className="w-full relative bg-saddlebrown overflow-hidden flex flex-row items-center justify-center py-[80px] px-[20px] md:px-[50px] md:py-[100px] lg:py-[200px] lg:px-[120px] xl:py-[300px] xl:px-[170px] box-border text-left text-lg text-black1 font-poppins">
      <div className="flex-1 rounded-xl bg-white overflow-y-auto flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-start justify-start px-[30px] py-5 md:px-[40px] lg:px-20 gap-[26px] mb-5">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10"
            onClick={() => {
              setActivityLevel((prev) => {
                return prev.filter((el: String) => el !== "other");
              });
            }}
          >
            <img
              className="relative w-[33.2px] h-[33.3px]"
              alt=""
              src="/subtract.svg"
            />
          </button>
          <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
            Please specify your allergen(s)
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[30px] md:px-[100px] lg:px-[120px] xl:px-[240px] gap-[3px] text-base text-orange mb-5">
          <div className="w-[345px] relative font-semibold hidden">Label</div>
          <input
            className="[outline:none] font-poppins text-sm bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
            placeholder="Enter Input"
            type="text"
          />
          <div className="w-[345px] relative text-xs text-black1 hidden" />
        </div>
        <div className="self-stretch flex flex-col items-end justify-end py-5 px-[30px] lg:px-[70px]">
          <button
            className={`cursor-pointer [border:none] py-1 px-[18px] bg-orange w-[103px] rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border  hover:bg-slate-300`}
            onClick={() => {
              setActivityLevel((prev) => {
                prev.concat;
                return prev.filter((el: String) => el !== "other");
              });
            }}
          >
            <b
              className={`flex-1 relative text-lg font-poppins text-white ${
                isPressed ? "text-orange" : "text-white"
              } text-center`}
            >
              Next
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOtherBox;
