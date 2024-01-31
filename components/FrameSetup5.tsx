import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const ProfileSetup5: NextPage = () => {
  const router = useRouter();

  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };

  return (
    <section className="w-[951px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border gap-[20px] md:gap-[54px] text-left text-lg text-black font-poppins">
      <div className="self-stretch flex flex-col items-start justify-start px-[20px] py-5 md:px-[40px] lg:px-20 gap-[26px]">
        <Link href="/Prsetup4a" className="no-underline">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10">
            <img
              className="relative w-[33.2px] h-[33.3px]"
              alt=""
              src="/subtract.svg"
            />
          </button>
        </Link>
        <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
          Are you allergic to anythng?
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-darkslategray px-[30px] md:px-[60px] lg:px-[120px]">
        {/* Grid container */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-[15px] md:gap-[20px] lg:gap-[30px] w-full ">
          {/* First div taking up the full width of the grid */}
          <div className="mb-0 md:mb-[10px] cursor-pointer col-span-full rounded-8xs bg-white shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center py-2.5 px-0 border-none border-white hover:bg-slate-300 hover-parent">
            <div className="h-[32px] md:h-[42px] flex-1 relative font-semibold flex items-center justify-center">
              No
            </div>
          </div>
          {/* Other items */}
          {/* Example button */}
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Egg
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Milk
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Soy
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Peanuts
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Sesame
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Tree Nuts
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Cereals w/ Gluten
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Buckwheat
            </div>
          </button>
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Crustacean Shellfish
            </div>
          </button>{" "}
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Molluscan Shellfish
            </div>
          </button>{" "}
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Fish
            </div>
          </button>{" "}
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Mustard
            </div>
          </button>{" "}
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Lupin
            </div>
          </button>{" "}
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Celery
            </div>
          </button>{" "}
          <button className="cursor-pointer py-[20px] md:py-[30px] px-[9px] bg-white flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent">
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Other
            </div>
          </button>
          {/* Add more buttons or divs as needed */}
          {/* ... */}
        </div>
      </div>

      <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
        <Link href="/Prsetup6a" className="no-underline">
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
        </Link>
      </div>
    </section>
  );
};

export default ProfileSetup5;
