import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import ProgressBar from "../components/common/ProgressBar2";

const Setup2a = () => {
  const router = useRouter();

  const [isPressed, setIsPressed] = useState(false);

  const [activityLevel, setActivityLevel] = useState("");

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);
  };
  return (
    <div className="w-full min-h-screen bg-saddlebrown overflow-hidden flex items-center justify-center py-[40px] px-[20px] md:px-[50px] md:py-[50px] lg:py-[60px] lg:px-[100px] xl:py-[60px] xl:px-[170px] box-border text-left text-lg text-black1 font-poppins">
      <div className="flex-1 mx-auto overflow-y-auto  rounded-xl bg-white flex flex-col items-start justify-start gap-[10px] z-[0] font-poppins my-10">
        <div className="self-stretch flex flex-col items-start justify-start pt-5 px-[20px] md:px-[50px] lg:px-20 gap-[26px]">
          <Link href="/Prsetup1a" className="no-underline">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10">
              <img
                className="relative w-[33.2px] h-[33.3px]"
                alt=""
                src="/subtract.svg"
              />
            </button>
          </Link>
          <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0 text-mid md:text-lg lg:text-2xl">
            How active are you?
          </div>
        </div>
        <div className="self-stretch flex  px-[20px] md:px-[50px] lg:px-20 mb-4 md:mb-0">
          <p className="text-red text-xs">
            <b className="font-poppins">{` Choose at least one option `}</b>
          </p>
        </div>

        <div className="self-stretch flex flex-col md:flex-row items-center justify-center py-2.5 px-[10px] md:pr-[20px] md:pl-[30px] lg:pl-[60px] xl:pl-[50px] gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[50px]">
          <div className="w-[50%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("low");
                }}
                className={`justify-center relative px-[90px] py-4 md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 ${
                  activityLevel === "low"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center  whitespace-nowrap overflow-hidden">
                    Low Active
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-poppins text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You work a desk job with no physical demands
                    </li>
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You do intentional exercise every day for at least 30 mins
                      OR you do vigorous activity for less than 30 mins
                    </li>
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You spend most of your day sitting
                    </li>
                    {/* Add other list items here */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Box end*/}
        {/*Box start*/}
        <div className="self-stretch flex flex-col md:flex-row items-center justify-center py-2.5 px-[10px] md:pr-[20px] md:pl-[30px] lg:pl-[60px] xl:pl-[50px] gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[50px]">
          <div className="w-[50%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("sedentary");
                }}
                className={`justify-center relative px-[90px] py-4 md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 ${
                  activityLevel === "sedentary"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center  whitespace-nowrap overflow-hidden">
                    Sedentary
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-poppins text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You work a desk job with no physical demands
                    </li>
                    <li className="max-w-[350px] lg:max-w-[570px] lg:pr-8 xl:pr-0">
                      You do less than 30 mins intentional exercise or no
                      exercise
                    </li>
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You spend most of your day sitting
                    </li>
                    {/* Add other list items here */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Box end*/}
        {/*Box start*/}
        <div className="self-stretch flex flex-col md:flex-row items-center justify-center py-2.5 px-[10px] md:pr-[20px] md:pl-[30px] lg:pl-[60px] xl:pl-[50px] gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[50px]">
          <div className="w-[50%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("active");
                }}
                className={`justify-center relative px-[90px] py-4 md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 ${
                  activityLevel === "active"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center  whitespace-nowrap overflow-hidden">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-poppins text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You work a moderately physically demanding job
                    </li>
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You do intentional exercise every day for at least 1 hour
                      45 mins OR you do vigorous activity for at least 50 mins
                    </li>
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You spend majority of the day doing something physical
                    </li>
                    {/* Add other list items here */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Box end*/}
        {/*Box start*/}
        <div className="self-stretch flex flex-col md:flex-row items-center justify-center py-2.5 px-[10px] md:pr-[20px] md:pl-[30px] lg:pl-[60px] xl:pl-[50px] gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[50px]">
          <div className="w-[50%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("veryActive");
                }}
                className={`justify-center relative px-[90px] py-4 md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 ${
                  activityLevel === "veryActive"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center  whitespace-nowrap overflow-hidden">
                    Very Active
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-poppins text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You work a consistently physically demanding job
                    </li>
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You do intentional exercise everyday for at least 4 hours
                      OR you do vigorous activity for at least 2 hours
                    </li>
                    <li className="max-w-[350px] lg:max-w-[530px]">
                      You spend most of your day doing something physical
                    </li>
                    {/* Add other list items here */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Box end*/}
        <div className="self-stretch flex flex-col items-end justify-end py-5 px-[30px] md:px-[70px]">
          <Link href="/Prsetup3" className="no-underline">
            <button
              disabled={activityLevel === ""}
              className={` ${
                activityLevel === "" ? "bg-slate-300" : "bg-orange"
              } cursor-pointer [border:none] py-2 px-[18px] w-[103px] rounded-2xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border  hover:bg-slate-300 }`}
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

      <ProgressBar
        steps={8}
        currentStep={1}
        navigationRoutes={[
          "Prsetup1a",
          "Prsetup2a",
          "Prsetup3",
          "Prsetup4a",
          "Prsetup5a",
          "Prsetup6a",
          "Prsetup7a",
          "Prsetup8a",
        ]}
        className="bottom-[91%] lg:top-[163%] xl:top-[122%]"
      />
    </div>
  );
};

export default Setup2a;
