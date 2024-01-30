import type { NextPage } from "next";
import React, { useState } from "react";
import FrameGroup from "../components/frame-group";
import NextButton from "../components/NextButton";

const Setup3a: NextPage = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };
  return (
    <div className="w-full relative bg-saddlebrown overflow-hidden flex flex-row items-center justify-center py-[40px] px-[20px] md:px-[50px] md:py-[50px] lg:py-[100px] lg:px-[120px] xl:py-[150px] xl:px-[170px] box-border tracking-[normal]">
      <section className="w-[951px] rounded-[50px] bg-white overflow-y-auto shrink-0 flex flex-col items-end justify-start py-5 px-0 box-border max-w-full gap-[10px] md:gap-[20px] lg:gap-[54px] ">
        <FrameGroup />
        <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
          <button
            className={`cursor-pointer [border:none] py-1 px-[18px] bg-orange w-[103px] rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border  hover:bg-slate-300`}
            onClick={handleClick}
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
      </section>
    </div>
  );
};

export default Setup3a;
