import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";

const profileSetup2 = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-orange">
      <div className="">
        <form className="bg-white shadow-md rounded-xl my-7 p-8  md:py-16 md:px-8 lg:px-20 ">
          <div className="flex-col sm:flex-row justify-center md:gap-16 lg:gap-52 flex">
            <div className="flex flex-col">
              <h1 className=" text-gray-700 text-2xl font-bold mb-2">
                Number of Meals Per Day
              </h1>
              <div className="grid grid-rows-4 gap-2 rounded-xl bg-white p-2 mb-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-14">
                  <div>
                    <input
                      type="radio"
                      name="activity"
                      id="low"
                      value="low"
                      className="peer hidden"
                      checked
                    />
                    <label
                      htmlFor="low"
                      className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                    >
                      Low Activity
                    </label>
                  </div>
                  <div className="flex flex-col max-w-[410px]">
                    <ol className="mx-2 p-3 my-0">
                      <li>You work a job with light physical demands</li>
                      <li>
                        You do intentional exercise every day for at least 30
                        mins OR you do vigorous activity for less than 30 mins
                      </li>
                      <li>You spend majority of your day on your feet</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-14">
                  <div>
                    <input
                      type="radio"
                      name="sedentary"
                      id="sedentary"
                      value="sedentary"
                      className="peer hidden"
                      checked
                    />
                    <label
                      htmlFor="sedentary"
                      className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                    >
                      Sedentary Activity
                    </label>
                  </div>
                  <div className="flex flex-col max-w-[410px]">
                    <ol className="mx-2 p-3 my-0">
                      <li>You work a desk job with no physical demands</li>
                      <li>
                        You do less than 30 mins intentional exercise or no
                        exercise
                      </li>
                      <li>You spend most of your day sitting</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-14">
                  <div className="">
                    <input
                      type="radio"
                      name="active"
                      id="active"
                      value="active"
                      className="peer hidden"
                      checked
                    />
                    <label
                      htmlFor="active"
                      className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                    >
                      Active
                    </label>
                  </div>
                  <div className="flex flex-col max-w-[410px]">
                    <ol className="mx-2 p-3 my-0">
                      <li>You work a moderately physically demanding job</li>
                      <li>
                        You do intentional exercise every day for at least 1
                        hour 45 mins OR you do vigorous activity for at least 50
                        mins
                      </li>
                      <li>
                        You spend majority of the day doing something physical
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-14">
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="veryActive"
                      id="veryActive"
                      value="veryActive"
                      className="peer hidden"
                      checked
                    />
                    <label
                      htmlFor="veryActive"
                      className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                    >
                      Very Active
                    </label>
                  </div>
                  <div className="flex flex-col max-w-[410px]">
                    <ol className="mx-2 p-3 my-0">
                      <li>You work a consistently physically demanding job </li>
                      <li>
                        You do intentional exercise everyday for at least 4
                        hours OR you do vigorous activity for at least 2 hours
                      </li>
                      <li>
                        You spend most of your day doing something physical
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">
              <Link href="/profileSetup1" className="no-underline">
                <ButtonPrimary title="Back" className="block" />
              </Link>
            </div>
            <div className="">
              <Link href="/profileSetup3" className="no-underline">
                <ButtonPrimary title="Next" className="block" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profileSetup2;
