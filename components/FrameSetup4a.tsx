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
  const [showPopup, setShowPopup] = useState(false);

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

    if (activityLevel.length === 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false); // Hide error message if at least one option is selected
      router.push("/Prsetup5a"); // Navigate to "Prsetup5a" page
    }
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
        <section className="w-full xl:w-[951px] min-h-[503px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border  text-left text-lg text-black font-poppins my-10 xl:mb-16">
          <div className="self-stretch flex flex-col items-start justify-start px-[20px] md:px-[40px] lg:px-20 gap-[26px] mb-10">
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

          <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-black1 px-[30px] md:px-[60px] lg:px-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-[15px] md:gap-[20px] lg:gap-[30px] w-full ">
              <button
                onClick={() => handleSelect("no")}
                className={`${
                  isSelected("no") ? "bg-orange" : "bg-white hover:bg-slate-300"
                } col-span-full h-[62px] cursor-pointer py-[10px] md:py-[20px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none  hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
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
                <div className="flex-1 relative text-sm font-semibold font-poppins text-black1 text-center">
                  Other
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-end py-5 px-[30px] md:px-[70px]">
            <button
              className={`cursor-pointer [border:none] py-1 px-[18px] w-[103px] rounded-2xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border ${
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
          </div>
        </section>
      )}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-slate-100 rounded-lg p-8 border-4 border-orange shadow-slate-300 shadow-lg mx-10">
            <h2 className="text-lg font-bold font-poppins mb-4">Error</h2>
            <p className="text-base text-red font-poppins">
              Please choose at least one option before proceeding.
            </p>
            <button
              className={`mt-4 text-white py-2 px-4 rounded-lg 
                      bg-orange hover:bg-slate-300 cursor-pointer
                  `}
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChoiceFrame;
