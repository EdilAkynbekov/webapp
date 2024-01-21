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
