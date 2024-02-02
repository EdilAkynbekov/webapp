import React, { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const Setup1a = () => {
  const router = useRouter();

  const [isPressed, setIsPressed] = useState(false);

  const [activityLevel, setActivityLevel] = useState("");
  const [activityLevel1, setActivityLevel1] = useState("");

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);
  };
  return (
    <div className="w-full min-h-screen bg-saddlebrown overflow-hidden flex items-center justify-center py-[50px] px-[20px] md:px-[50px] md:py-[50px] lg:py-[110px] lg:px-[120px] xl:px-[170px] box-border text-left text-lg text-black1 font-poppins">
      <div className="flex-1 mx-auto rounded-xl bg-white overflow-y-auto flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-start justify-start px-[20px] py-5 md:px-[40px] lg:px-20 gap-[26px]">
          <Link href="/" className="no-underline">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10">
              <img
                className="relative w-[33.2px] h-[33.3px]"
                alt=""
                src="/subtract.svg"
              />
            </button>
          </Link>
          <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
            Tell us more about you
          </div>
        </div>
        <div className="m-0 self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-5 md:px-10 box-border gap-[20px] max-w-full md:gap-[20px] lg:gap-[40px] lg:pl-20 lg:pr-10 lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[231px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-[5px] pb-[26px] gap-[3px]">
              <div className="self-stretch relative font-semibold font-poppins">
                Birthday
              </div>
              {/* <DatePicker /> */}

              <input
                className="[outline:none] flex-1 font-poppins text-base bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray "
                placeholder="Select date"
                type="text"
              />
              <div className="self-stretch relative text-sm text-black1" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-[5px] pb-[26px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Phone Number
              </div>
              <input
                className="[outline:none] flex-1 font-poppins text-base bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
                placeholder="XXXX XXXX"
                type="text"
              />
              <div className="self-stretch relative text-sm text-black1" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[7px]">
              <div className="self-stretch relative font-semibold">Gender</div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[30px]">
                <button
                  onClick={() => {
                    setActivityLevel("male");
                  }}
                  className={`flex-1 cursor-pointer py-3 px-5  ${
                    activityLevel === "male"
                      ? "bg-orange"
                      : "bg-white hover:bg-slate-300"
                  } w-[115px] h-[47px] rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center `}
                >
                  <div className=" w-[75px] relative text-base font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                    Male
                  </div>
                </button>
                <button
                  onClick={() => {
                    setActivityLevel("female");
                  }}
                  className={`flex-1 cursor-pointer py-3 px-5  ${
                    activityLevel === "female"
                      ? "bg-orange"
                      : "bg-white hover:bg-slate-300"
                  } w-[115px] rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center `}
                >
                  <div className=" w-[75px] relative text-base font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                    Female
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[231px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-[5px] pb-[26px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Height (cm)
              </div>
              <input
                className="[outline:none] flex-1 font-poppins text-base bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
                placeholder="0"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[8px] px-[5px] pb-[26px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Weight (kg)
              </div>
              <input
                className="[outline:none] flex-1 font-poppins text-base bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
                placeholder="0"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[12px] px-[5px] pb-[15px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Number of Meals Per Day
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <button
                  onClick={() => {
                    setActivityLevel1("1");
                  }}
                  className={`flex-1 cursor-pointer py-2.5 px-5 ${
                    activityLevel1 === "1"
                      ? "bg-orange"
                      : "bg-white hover:bg-slate-300"
                  } rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start `}
                >
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    2
                  </div>
                </button>
                <button
                  onClick={() => {
                    setActivityLevel1("3");
                  }}
                  className={`flex-1 cursor-pointer py-2.5 px-5 ${
                    activityLevel1 === "3"
                      ? "bg-orange"
                      : "bg-white hover:bg-slate-300"
                  } rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start `}
                >
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    3
                  </div>
                </button>
                <button
                  onClick={() => {
                    setActivityLevel1("4");
                  }}
                  className={`flex-1 cursor-pointer py-2.5 px-5 ${
                    activityLevel1 === "4"
                      ? "bg-orange"
                      : "bg-white hover:bg-slate-300"
                  } rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start `}
                >
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    4
                  </div>
                </button>
                <button
                  onClick={() => {
                    setActivityLevel1("5");
                  }}
                  className={`flex-1 cursor-pointer py-2.5 px-5 ${
                    activityLevel1 === "5"
                      ? "bg-orange"
                      : "bg-white hover:bg-slate-300"
                  } rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start `}
                >
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    5
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch relative text-xs text-black1 max-w-[500px]">
              <p className="mb-6 text-start justify-start">
                <span>
                  <span className="font-poppins text-black1">
                    Individuals with the following conditions are
                  </span>
                  <span className="text-red">
                    <b className="font-poppins">{` NOT `}</b>
                  </span>
                </span>
                <span>
                  <span>
                    <span className="text-red">recommended</span>
                  </span>
                  <span>
                    <span>
                      {" "}
                      to follow a diet consisting of less than 3 meals per day.
                    </span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-mini">
                <span>
                  <span>
                    <span>1. Eating Disorder</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-mini">
                <span>
                  <span>
                    <span>{`2. Type 1 & Type 2 Diabetes`}</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-mini">
                <span>
                  <span>
                    <span>3. Pregnant / Breastfeeding</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-mini">
                <span>
                  <span>
                    <span>4. Weight Gain Diet</span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
          <Link href="/Prsetup2a" className="no-underline">
            <button
              disabled={activityLevel === "" || activityLevel1 === ""}
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
    </div>
  );
};

export default Setup1a;
