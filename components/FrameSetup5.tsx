import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AddOtherBox from "./profileSetup/AddOtherBoxSetup5";

export type ActivityLevel =
  | "no"
  | "egg"
  | "milk"
  | "soy"
  | "peanuts"
  | "sesame"
  | "nuts"
  | "cereals"
  | "buckwheat"
  | "shellfish"
  | "molluscan"
  | "fish"
  | "mustard"
  | "lupin"
  | "celery"
  | "other";

const ProfileSetup5: NextPage = () => {
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
        <section className="w-[951px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border text-left text-lg text-black font-poppins my-10 lg:my-20">
          <div className="self-stretch flex flex-col items-start justify-start px-[20px] pt-5 md:px-[40px] lg:px-20 gap-[26px]">
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
          <div className="self-stretch items-start justify-start  px-[20px] md:px-[40px] lg:px-20 mb-4 md:mb-8">
            <p className="text-red text-xs">
              <b className="font-poppins">{` Choose at least one option `}</b>
            </p>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm10 md:text-sm text-darkslategray px-[30px] md:px-[60px] lg:px-[120px]">
            {/* Grid container */}
            <div className="grid grid-cols-4 gap-[15px] md:gap-[20px] lg:gap-[30px] w-full text-sm10 md:text-sm">
              {/* First div taking up the full width of the grid */}
              <button
                onClick={() => handleSelect("no")}
                className={`${
                  isSelected("no") ? "bg-orange" : "bg-white hover:bg-slate-300"
                } col-span-full h-[62px] cursor-pointer py-[10px] md:py-[20px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  No
                </div>
              </button>
              {/* Other items */}
              {/* Example button */}
              <button
                onClick={() => handleSelect("egg")}
                className={`${
                  isSelected("egg")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Egg
                </div>
              </button>
              <button
                onClick={() => handleSelect("milk")}
                className={`${
                  isSelected("milk")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Milk
                </div>
              </button>
              <button
                onClick={() => handleSelect("soy")}
                className={`${
                  isSelected("soy")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Soy
                </div>
              </button>
              <button
                onClick={() => handleSelect("peanuts")}
                className={`${
                  isSelected("peanuts")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Peanuts
                </div>
              </button>
              <button
                onClick={() => handleSelect("sesame")}
                className={`${
                  isSelected("sesame")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Sesame
                </div>
              </button>
              <button
                onClick={() => handleSelect("nuts")}
                className={`${
                  isSelected("nuts")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Tree Nuts
                </div>
              </button>
              <button
                onClick={() => handleSelect("cereals")}
                className={`${
                  isSelected("cereals")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Cereals w/ Gluten
                </div>
              </button>
              <button
                onClick={() => handleSelect("buckwheat")}
                className={`${
                  isSelected("buckwheat")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Buckwh <br />
                  eat
                </div>
              </button>
              <button
                onClick={() => handleSelect("shellfish")}
                className={`${
                  isSelected("shellfish")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm8 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Crustacean Shellfish
                </div>
              </button>
              <button
                onClick={() => handleSelect("molluscan")}
                className={`${
                  isSelected("molluscan")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm8 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Molluscan Shellfish
                </div>
              </button>
              <button
                onClick={() => handleSelect("fish")}
                className={`${
                  isSelected("fish")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Fish
                </div>
              </button>
              <button
                onClick={() => handleSelect("mustard")}
                className={`${
                  isSelected("mustard")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Mustard
                </div>
              </button>
              <button
                onClick={() => handleSelect("lupin")}
                className={`${
                  isSelected("lupin")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Lupin
                </div>
              </button>
              <button
                onClick={() => handleSelect("celery")}
                className={`${
                  isSelected("celery")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Celery
                </div>
              </button>
              <button
                onClick={() => handleSelect("other")}
                className={`${
                  isSelected("other")
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-darkslategray text-center">
                  Other
                </div>
              </button>
            </div>
          </div>

          <div className="self-stretch flex flex-col items-end justify-end py-5 px-[30px] md:px-[70px]">
            <Link href="/Prsetup6a" className="no-underline">
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

export default ProfileSetup5;
