import type { NextPage } from "next";
import React, { useState } from "react";
import FrameGroup from "../components/frame-group";

const Setup3a: NextPage = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };
  return (
    <div className="w-full relative bg-orange overflow-hidden flex flex-row items-center justify-center py-10 px-5 box-border tracking-[normal]">
      <section className="w-[951px] rounded-[50px] bg-white overflow-y-auto shrink-0 flex flex-col items-end justify-start py-5 px-0 box-border max-w-full gap-[10px] md:gap-[20px] lg:gap-[54px] ">
        <FrameGroup />
        <div className="w-[243px] flex flex-row items-start justify-start py-0 px-[70px] box-border">
          <button
            className={`cursor-pointer p-1.5 ${
              isPressed ? "bg-black" : "bg-orange"
            } flex-1 rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center hover:bg-slate-300`}
            onClick={handleClick}
          >
            <b
              className={`h-[27px] relative text-lg flex font-poppins ${
                isPressed ? "text-orange" : "text-white"
              } text-center items-center justify-center`}
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
