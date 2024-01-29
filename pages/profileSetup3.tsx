import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";

const profileSetup3 = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-orange">
      <div className="m-8 lg:w-2/3">
        <form className="bg-white shadow-md rounded-xl my-7 p-8  md:py-16 md:px-8 lg:px-20">
          <div className="flex-col sm:flex-row justify-center md:gap-16 lg:gap-52 flex">
            <div className="flex flex-col">
              <h1 className=" text-gray-700 text-2xl font-bold mb-2">
                Number of Meals Per Day
              </h1>
              <div className="grid grid-rows-4 gap-2 rounded-xl bg-white p-2 mb-2">
                <div>
                  <input
                    type="radio"
                    name="goal"
                    id="gain"
                    value="gain"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="gain"
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    Weight Gain
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="goal"
                    id="balance"
                    value="balance"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="balance"
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px] "
                  >
                    Balanced Meal
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="goal"
                    id="loss"
                    value="loss"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="loss"
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    Weight Loss
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-64 m-auto items-center h-32 justify-center">
            <div className="py-1 relative min-w-full">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="absolute h-2 rounded-full bg-orange w-0"
                  style={{ width: "24.1935%", left: "11.2903%" }}
                ></div>
                <div
                  className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                  unselectable="on"
                  style={{ left: "11.2903%" }}
                >
                  <div className="relative -mt-2 w-1">
                    <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full">
                      <div className="relative shadow-md">
                        <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                          15
                        </div>
                        <svg
                          className="absolute text-black w-full h-2 left-0 top-100"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-4 w-4 -ml-2 top-0 rounded-full bg-white border border-gray-300 shadow cursor-pointer flex items-center justify-center"
                  unselectable="on"
                  style={{ left: "35.4839%" }}
                >
                  <div className="relative -mt-2 w-1">
                    <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full">
                      <div className="relative shadow-md">
                        <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                          30
                        </div>
                        <svg
                          className="absolute text-black w-full h-2 left-0 top-100"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
                  8
                </div>
                <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
                  70
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">
              <Link href="/profileSetup2" className="no-underline">
                <ButtonPrimary title="Back" className="block" />
              </Link>
            </div>
            <div className="">
              <Link href="/profileSetup4" className="no-underline">
                <ButtonPrimary title="Next" className="block" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profileSetup3;
