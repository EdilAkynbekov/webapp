import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import AddOtherBox from "./profileSetup/AddOtherBoxSetup4";
import { useRouter } from "next/router";
import Link from "next/link";

export type ActivityLevel =
  | "no"
  | "diabetes"
  | "testosterone"
  | "pressure"
  | "stroke"
  | "cholesterol"
  | "eating"
  | "depression"
  | "other";
const ChoiceFrame: NextPage = () => {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  // Explicitly set the type of the state to an array of ActivityLevel
  const [activityLevel, setActivityLevel] = useState<ActivityLevel[]>([]);

  const handleSelect = (level: ActivityLevel) => {
    if (level === "no") {
      setActivityLevel(["no"]);
    } else {
      setActivityLevel((prev) =>
        prev.includes(level)
          ? prev.filter((l) => l !== level)
          : [...prev.filter((l) => l !== "no"), level]
      );
    }
  };

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);
  };

  const isSelected = (level: ActivityLevel) => activityLevel.includes(level);

  return (
    <>
      {activityLevel.includes("other") ? (
        <AddOtherBox
          activityLevel={activityLevel}
          setActivityLevel={setActivityLevel}
        />
      ) : (
        <section className="w-[951px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border gap-[20px] md:gap-[54px] text-left text-lg text-black font-poppins">
          <div className="self-stretch flex flex-col items-start justify-start px-[20px] py-5 md:px-[40px] lg:px-20 gap-[26px]">
            <Link href="/Prsetup3" className="no-underline">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10">
                <img
                  className="relative w-[33.2px] h-[33.3px]"
                  alt=""
                  src="/subtract.svg"
                />
              </button>
            </Link>
            <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
              Are you at risk of any of the following?
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-darkslategray px-[30px] md:px-[60px] lg:px-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-[15px] md:gap-[20px] lg:gap-[30px] w-full ">
              <button
                onClick={() => handleSelect("no")}
                className={`${
                  isSelected("no") ? "bg-orange" : "bg-white hover:bg-slate-300"
                } col-span-full h-[62px] cursor-pointer py-[10px] md:py-[20px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  No
                </div>
              </button>

              {/* Other items */}
              {/* Example button */}
              <button
                onClick={() => handleSelect("diabetes")}
                className={`${
                  isSelected("diabetes")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none   hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Diabetes
                </div>
              </button>
              <button
                onClick={() => handleSelect("testosterone")}
                className={`${
                  isSelected("testosterone")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Testosterone Deficiency
                </div>
              </button>
              <button
                onClick={() => handleSelect("pressure")}
                className={`${
                  isSelected("pressure")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  High Blood Pressure
                </div>
              </button>
              <button
                onClick={() => handleSelect("stroke")}
                className={`${
                  isSelected("stroke")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Heart Disease / Stroke
                </div>
              </button>
              <button
                onClick={() => handleSelect("cholesterol")}
                className={`${
                  isSelected("cholesterol")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  High Cholesterol
                </div>
              </button>
              <button
                onClick={() => handleSelect("eating")}
                className={`${
                  isSelected("eating")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Eating Disorder
                </div>
              </button>
              <button
                onClick={() => handleSelect("depression")}
                className={`${
                  isSelected("depression")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Depression
                </div>
              </button>
              <button
                onClick={() => handleSelect("other")}
                className={`${
                  isSelected("other")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Other
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
            <Link href="/Prsetup5a" className="no-underline">
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
      )}
    </>
  );
};

export default ChoiceFrame;
