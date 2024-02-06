import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const ChoiceFrame: NextPage = () => {
  const router = useRouter();

  const [isPressed, setIsPressed] = useState(false);

  const [activityLevel, setActivityLevel] = useState("");

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);
  };

  return (
    <>
      {activityLevel !== "other" ? (
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
          <div className="self-stretch flex  px-[20px] md:px-[50px] lg:px-20 h-2">
            <p className="text-red text-xs">
              <b className="font-poppins">{` Choose at least one option `}</b>
            </p>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm text-darkslategray px-[30px] md:px-[60px] lg:px-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-[15px] md:gap-[20px] lg:gap-[30px] w-full ">
              <button
                onClick={() => {
                  setActivityLevel("no");
                }}
                className={`${
                  activityLevel === "no" ? "bg-orange" : "bg-white"
                } col-span-full h-[0px] cursor-pointer py-[10px] md:py-[20px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  No
                </div>
              </button>

              {/* Other items */}
              {/* Example button */}
              <button
                onClick={() => {
                  setActivityLevel("diabetes");
                }}
                className={`${
                  activityLevel === "diabetes" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Diabetes
                </div>
              </button>
              <button
                onClick={() => {
                  setActivityLevel("testosterone");
                }}
                className={`${
                  activityLevel === "testosterone" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Testosterone Deficiency
                </div>
              </button>
              <button
                onClick={() => {
                  setActivityLevel("pressure");
                }}
                className={`${
                  activityLevel === "pressure" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  High Blood Pressure
                </div>
              </button>
              <button
                onClick={() => {
                  setActivityLevel("stroke");
                }}
                className={`${
                  activityLevel === "stroke" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Heart Disease / Stroke
                </div>
              </button>
              <button
                onClick={() => {
                  setActivityLevel("cholesterol");
                }}
                className={`${
                  activityLevel === "cholesterol" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  High Cholesterol
                </div>
              </button>
              <button
                onClick={() => {
                  setActivityLevel("eating");
                }}
                className={`${
                  activityLevel === "eating" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Eating Disorder
                </div>
              </button>
              <button
                onClick={() => {
                  setActivityLevel("depression");
                }}
                className={`${
                  activityLevel === "depression" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Depression
                </div>
              </button>

              <button
                onClick={() => {
                  setActivityLevel("other");
                }}
                className={`${
                  activityLevel === "other" ? "bg-orange" : "bg-white"
                } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center min-w-[106px] border-none border-white hover:bg-slate-300 hover-parent`}
              >
                {" "}
                {/* <Link
              href="/PrsetupInput"
              className="no-underline bg-none text-black"
            > */}
                <div className="flex-1 relative text-sm font-semibold font-poppins text-darkslategray text-center">
                  Other
                </div>
                {/* </Link> */}
              </button>
            </div>
          </div>

          <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
            <Link href="/Prsetup5a" className="no-underline">
              <button
                disabled={activityLevel === ""}
                className={` ${
                  activityLevel === "" ? "bg-slate-300" : "bg-orange"
                } cursor-pointer [border:none] py-1 px-[18px]  w-[103px] rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border  hover:bg-slate-300 }`}
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
      ) : (
        <div className="w-full relative bg-saddlebrown overflow-hidden flex flex-row items-center justify-center  box-border text-left text-lg text-black1 font-poppins">
          <div className="flex-1 rounded-xl bg-white overflow-y-auto flex flex-col items-center justify-center">
            <div className="self-stretch flex flex-col items-start justify-start px-[30px] py-5 md:px-[40px] lg:px-20 gap-[26px] mb-5">
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
                Please specify your allergen(s)
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-[30px] md:px-[100px] lg:px-[120px] xl:px-[240px] gap-[3px] text-base text-orange mb-5">
              <div className="w-[345px] relative font-semibold hidden">
                Label
              </div>
              <input
                className="[outline:none] font-poppins text-sm bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
                placeholder="Enter Input"
                type="text"
              />
              <div className="w-[345px] relative text-xs text-black1 hidden" />
            </div>
            <div className="self-stretch flex flex-col items-end justify-end py-5 px-[30px] lg:px-[70px]">
              <Link href="/Prsetup5a" className="no-underline">
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
          </div>
        </div>
      )}
    </>
  );
};

export default ChoiceFrame;
