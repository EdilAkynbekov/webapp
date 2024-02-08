import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import ProgressBar from "../components/common/ProgressBar2";
import MenuFullScreen from "../components/menus/MenuFullScreen";

const Setup2a = () => {
  const router = useRouter();

  const [isPressed, setIsPressed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activityLevel, setActivityLevel] = useState("");

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);

    if (activityLevel.length === 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false); // Hide error message if at least one option is selected
      router.push("/Prsetup3"); // Navigate to "Prsetup5a" page
    }
  };
  return (
    <div className="w-full min-h-screen bg-saddlebrown overflow-hidden flex flex-col items-center justify-center py-[40px] px-[20px] md:px-[50px] md:py-[50px] lg:py-[60px] lg:px-[100px] xl:py-[60px] xl:px-[170px] box-border text-left text-lg text-black1 font-poppins">
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
        className="md:hidden"
      />
      <div className=" w-full xl:w-[951px] min-h-[503px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border  text-left text-lg text-black font-poppins my-10">
        <div className="self-stretch flex flex-col items-start justify-start pt-5 px-[20px] md:px-[50px] lg:px-20 gap-[26px] mb-10">
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

        <div className="self-stretch flex flex-col md:flex-row items-center justify-center py-2.5 px-[10px] md:pr-[20px] md:pl-[30px] lg:pl-[60px] xl:pl-[50px] gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[50px]">
          <div className="w-[40%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("low");
                }}
                className={`justify-center relative px-[60px] py-4 md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 ${
                  activityLevel === "low"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-black1 text-center  whitespace-nowrap overflow-hidden">
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
          <div className="w-[40%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("sedentary");
                }}
                className={`justify-center relative px-[60px] py-4 md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 ${
                  activityLevel === "sedentary"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-black1 text-center  whitespace-nowrap overflow-hidden">
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
          <div className="w-[40%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("active");
                }}
                className={`justify-center relative px-[60px] py-4 md:px-28 md:py-6 lg:px-[113.5px] xl:px-40 2xl:px-48 ${
                  activityLevel === "active"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-black1 text-center  whitespace-nowrap overflow-hidden">
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
        <div className="self-stretch flex flex-col md:flex-row items-center justify-center py-2.5 px-[0px] md:pr-[20px] md:pl-[30px] lg:pl-[60px] xl:pl-[50px] gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[50px]">
          <div className="w-[40%] mx-auto">
            <div className="relative group">
              <div
                onClick={() => {
                  setActivityLevel("veryActive");
                }}
                className={`justify-center relative px-[60px] py-4 md:px-24 md:py-6 lg:px-[91.5px] xl:px-40 2xl:px-48 ${
                  activityLevel === "veryActive"
                    ? "bg-orange"
                    : "bg-white hover:bg-slate-300"
                } ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-black1 text-center  whitespace-nowrap overflow-hidden">
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
        className="hidden lg:block"
      />
    </div>
  );
};

export default Setup2a;
