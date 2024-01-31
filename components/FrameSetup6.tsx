import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
const ChoiceFrame: NextPage = () => {
  const router = useRouter();

  const onSignOutClick = useCallback(() => {
    router.push("/profile-setup1");
  }, [router]);

  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };

  return (
    <section className="w-[951px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border gap-[20px] md:gap-[40px] text-left text-lg text-black font-poppins">
      <div className="self-stretch flex flex-col items-start justify-start px-[20px] py-5 md:px-[40px] lg:px-16 gap-[26px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10"
          onClick={onSignOutClick}
        >
          <img
            className="relative w-[33.2px] h-[33.3px]"
            alt=""
            src="/subtract.svg"
          />
        </button>
        <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
          What do you like?
        </div>
      </div>

      <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-darkslategray px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Grid container */}
        <div className="self-stretch flex flex-col items-start justify-start px-[0px] py-0 gap-[0px]">
          <div className="w-[87px] items-start justify-start py-0 px-[0px] box-border text-base text-white">
            <div className="flex-1 rounded-xl bg-black flex flex-row items-start justify-center p-px">
              <b className="h-[31px] w-[77.4px] relative flex items-center justify-center">
                Protein
              </b>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-[10px] w-full ">
          <button className="cursor-pointer py-[20px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Beef
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Pork
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Chicken
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Lamb
            </div>
          </button>
          <button className="cursor-pointer py-[20px]   bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Duck
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Fish
            </div>
          </button>
          <button className="cursor-pointer py-[20px]   bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Tofu
            </div>
          </button>
          <button className="cursor-pointer py-[20px]   bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Egg
            </div>
          </button>
          <button className="cursor-pointer py-[20px] text-xs md:text-sm  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Nuts
            </div>
          </button>
          <button className="cursor-pointer py-[20px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Legumes
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Beans
            </div>
          </button>

          {/* Add more buttons or divs as needed */}
          {/* ... */}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-darkslategray px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Grid container */}
        <div className="self-stretch flex flex-col items-start justify-start px-[0px] py-0 gap-[0px]">
          <div className="w-[87px] items-start justify-start py-0 px-[0px] box-border text-base text-white">
            <div className="flex-1 rounded-xl bg-black flex flex-row items-start justify-center p-px">
              <b className="h-[31px] w-[77.4px] relative flex items-center justify-center">
                Protein
              </b>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-[10px] w-full ">
          <button className="cursor-pointer py-[20px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Beef
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Pork
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Chicken
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Lamb
            </div>
          </button>
          <button className="cursor-pointer py-[20px]   bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Duck
            </div>
          </button>
          <button className="cursor-pointer py-[20px]  bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Fish
            </div>
          </button>
          <button className="cursor-pointer py-[20px]   bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-xs md:text-sm font-semibold font-poppins text-darkslategray text-center">
              Tofu
            </div>
          </button>
        </div>
      </div>

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
  );
};

export default ChoiceFrame;
