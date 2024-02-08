import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type ActivityLevel =
  | "rice"
  | "noodles"
  | "pasta"
  | "bread"
  | "sweetpotato"
  | "potato"
  | "quinoa"
  | "lentils"
  | "beans"
  | "oats"
  | "cereal"
  | "corn"
  | "avocado"
  | "artichoke"
  | "greens"
  | "broccoli"
  | "carrot"
  | "sprouts"
  | "apple"
  | "pear"
  | "rasp"
  | "orange"
  | "blue"
  | "pumpkin";

const ChoiceFrame: NextPage = () => {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  // Explicitly set the type of the state to an array of ActivityLevel
  const [activityLevel, setActivityLevel] = useState<ActivityLevel[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const handleSelect = (level: ActivityLevel) => {
    setActivityLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);

    if (activityLevel.length === 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false); // Hide error message if at least one option is selected
      router.push("/Prsetup8a"); // Navigate to "Prsetup5a" page
    }
  };

  const isSelected = (level: ActivityLevel) => activityLevel.includes(level);
  return (
    <section className="w-full xl:w-[951px] relative rounded-xl bg-white flex flex-col items-center justify-start py-5 px-0 box-border text-left text-lg text-black font-poppins mt-10 lg:mt-16 mb-4 lg:mb-6 xl:mb-16">
      <div className="self-stretch flex flex-col items-start justify-start px-[20px] pt-5 md:px-[40px] lg:px-16 gap-[26px] mb-10">
        <Link href="/Prsetup6a" className="no-underline">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10">
            <img
              className="relative w-[33.2px] h-[33.3px]"
              alt=""
              src="/subtract.svg"
            />
          </button>
        </Link>
        <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
          What do you like?
        </div>
      </div>

      <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm10 md:text-sm text-black1 px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Grid container */}
        <div className="self-stretch flex flex-col items-start justify-start px-[0px] py-0 gap-[0px]">
          <div className="w-[150px] items-start justify-start py-0 px-[0px] box-border text-base text-white">
            <div className="flex-1 rounded-xl bg-black flex flex-row items-start justify-center p-px">
              <b className="h-[31px] w-[150px] relative flex items-center justify-center">
                Carbohydrates
              </b>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-[10px] w-full ">
          <button
            onClick={() => handleSelect("rice")}
            className={`${
              isSelected("rice") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px]  flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Rice
            </div>
          </button>
          <button
            onClick={() => handleSelect("noodles")}
            className={`${
              isSelected("noodles")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Noodles
            </div>
          </button>
          <button
            onClick={() => handleSelect("pasta")}
            className={`${
              isSelected("pasta") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center   hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Pasta
            </div>
          </button>
          <button
            onClick={() => handleSelect("bread")}
            className={`${
              isSelected("bread") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center   hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Bread
            </div>
          </button>
          <button
            onClick={() => handleSelect("sweetpotato")}
            className={`${
              isSelected("sweetpotato")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center   hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Sweet Potato
            </div>
          </button>
          <button
            onClick={() => handleSelect("potato")}
            className={`${
              isSelected("potato") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Potato
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("quinoa")}
            className={`${
              isSelected("quinoa") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center   hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Quinoa
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("lentils")}
            className={`${
              isSelected("lentils")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Lentils
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("beans")}
            className={`${
              isSelected("beans") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Beans
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("oats")}
            className={`${
              isSelected("oats") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Oats
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("cereal")}
            className={`${
              isSelected("cereal") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Cereal
            </div>
          </button>
          <button
            onClick={() => handleSelect("corn")}
            className={`${
              isSelected("corn") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Corn
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[34px] text-center text-sm10 md:text-sm text-black1 px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Grid container */}
        <div className="self-stretch flex flex-col items-start justify-start px-[0px] pt-5 pb-0 gap-[0px]">
          <div className="w-[87px] items-start justify-start py-0 px-[0px] box-border text-base text-white">
            <div className="flex-1 rounded-xl bg-black flex flex-row items-start justify-center p-px">
              <b className="h-[31px] w-[77.4px] relative flex items-center justify-center">
                Fiber
              </b>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-[10px] w-full ">
          <button
            onClick={() => handleSelect("avocado")}
            className={`${
              isSelected("avocado")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Avocado
            </div>
          </button>
          <button
            onClick={() => handleSelect("artichoke")}
            className={`${
              isSelected("artichoke")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Artichoke
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("greens")}
            className={`${
              isSelected("greens") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Leafy Greens
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("broccoli")}
            className={`${
              isSelected("broccoli")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Broccoli
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("carrot")}
            className={`${
              isSelected("carrot") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Carrot
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("pumpkin")}
            className={`${
              isSelected("pumpkin")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Pumpkin
            </div>
          </button>{" "}
          <button
            onClick={() => handleSelect("sprouts")}
            className={`${
              isSelected("sprouts")
                ? "bg-orange"
                : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Sprouts
            </div>
          </button>
          <button
            onClick={() => handleSelect("apple")}
            className={`${
              isSelected("apple") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Apple
            </div>
          </button>
          <button
            onClick={() => handleSelect("pear")}
            className={`${
              isSelected("pear") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Pear
            </div>
          </button>
          <button
            onClick={() => handleSelect("rasp")}
            className={`${
              isSelected("rasp") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Raspb <br />
              erries
            </div>
          </button>
          <button
            onClick={() => handleSelect("orange")}
            className={`${
              isSelected("orange") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Orange
            </div>
          </button>
          <button
            onClick={() => handleSelect("blue")}
            className={`${
              isSelected("blue") ? "bg-orange" : "bg-white hover:bg-slate-300"
            } h-[62px] cursor-pointer py-[20px] md:py-[30px] px-[9px] flex-1 rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center  hover-parent`}
          >
            <div className="flex-1 relative text-sm10 md:text-sm font-semibold font-poppins text-black1 text-center">
              Blue <br />
              berries
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
    </section>
  );
};

export default ChoiceFrame;
