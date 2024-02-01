import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type ActivityLevel =
  | "pan"
  | "wok"
  | "skillet"
  | "pot"
  | "stockpot"
  | "saucepan"
  | "blender"
  | "ricecooker"
  | "oven"
  | "fryer"
  | "steamer"
  | "sous"
  | "pressure";

const ChoiceFrame: NextPage = () => {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  // Explicitly set the type of the state to an array of ActivityLevel
  const [activityLevel, setActivityLevel] = useState<ActivityLevel[]>([]);

  const handleSelect = (level: ActivityLevel) => {
    setActivityLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);
  };

  const isSelected = (level: ActivityLevel) => activityLevel.includes(level);
  return (
    <section className="w-[951px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border gap-[20px] md:gap-[40px] text-left text-lg text-black font-poppins">
      <div className="self-stretch flex flex-col items-start justify-start px-[20px] py-5 md:px-[40px] lg:px-16 gap-[26px]">
        <Link href="/Prsetup5a" className="no-underline">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10">
            <img
              className="relative w-[33.2px] h-[33.3px]"
              alt=""
              src="/subtract.svg"
            />
          </button>
        </Link>
        <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
          What do you have in your kitchen?
        </div>
      </div>

      <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-darkslategray px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Grid container */}
        <div className="self-stretch flex flex-col items-start justify-start px-[0px] py-0 gap-[0px]">
          <div className="w-[150px] items-start justify-start py-0 px-[0px] box-border text-base text-white">
            <div className="flex-1 rounded-xl bg-black flex flex-row items-start justify-center p-px">
              <b className="h-[31px] w-[150px] relative flex items-center justify-center">
                Cookware
              </b>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-[10px] w-full ">
          <button
            onClick={() => handleSelect("pan")}
            className={`${
              isSelected("pan") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px]  flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Frying Pan
            </div>
          </button>
          <button
            onClick={() => handleSelect("wok")}
            className={`${
              isSelected("wok") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Wok
            </div>
          </button>
          <button
            onClick={() => handleSelect("skillet")}
            className={`${
              isSelected("skillet") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center   hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Cast Iron Skillet
            </div>
          </button>
          <button
            onClick={() => handleSelect("pot")}
            className={`${
              isSelected("pot") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center   hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Pot
            </div>
          </button>
          <button
            onClick={() => handleSelect("stockpot")}
            className={`${
              isSelected("stockpot") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center   hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Stockpot
            </div>
          </button>
          <button
            onClick={() => handleSelect("saucepan")}
            className={`${
              isSelected("saucepan") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Saucepan
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-darkslategray px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Grid container */}
        <div className="self-stretch flex flex-col items-start justify-start px-[0px] py-0 gap-[0px]">
          <div className="w-[150px] items-start justify-start py-0 px-[0px] box-border text-base text-white">
            <div className="flex-1 rounded-xl bg-black flex flex-row items-start justify-center p-px">
              <b className="h-[31px] w-[77.4px] relative flex items-center justify-center">
                Appliances
              </b>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-[10px] w-full ">
          <button
            onClick={() => handleSelect("blender")}
            className={`${
              isSelected("blender") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Blender
            </div>
          </button>
          <button
            onClick={() => handleSelect("ricecooker")}
            className={`${
              isSelected("ricecooker") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Rice Cooker
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("oven")}
            className={`${
              isSelected("oven") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Oven
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("fryer")}
            className={`${
              isSelected("fryer") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Air Fryer
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("steamer")}
            className={`${
              isSelected("steamer") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Steamer
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("sous")}
            className={`${
              isSelected("sous") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Sous Vide Cooker
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("pressure")}
            className={`${
              isSelected("pressure") ? "bg-orange" : "bg-white"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
              Pressure Cooker
            </div>
          </button>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
        <Link href="/Prsetup8a" className="no-underline">
          <button
            disabled={activityLevel.length === 0}
            className={`cursor-pointer [border:none] py-2 px-[18px] w-[103px] rounded-2xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border ${
              activityLevel.length === 0
                ? "bg-slate-300"
                : "bg-orange hover:bg-slate-300"
            } `}
            onClick={handleClick}
          >
            <b className="flex-1 relative text-lg font-poppins text-white text-center">
              Next
            </b>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ChoiceFrame;
