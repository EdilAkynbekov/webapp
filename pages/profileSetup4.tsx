import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";

const profileSetup4 = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-orange">
      <div className="m-8 lg:w-2/3">
        <form className="bg-white shadow-md rounded-xl my-7 p-8  md:py-16 md:px-8 lg:px-20">
          <div className="flex-col sm:flex-row justify-center md:gap-16 lg:gap-52 flex">
            <div className="flex flex-col mb-8 md:mb-20">
              <h1 className=" text-gray-700 text-2xl font-bold mb-8 md:mb-16">
                Are you at risk of any of the following?
              </h1>
              <div className="p-4">
                <input
                  type="radio"
                  name="risk"
                  id="no"
                  value="no"
                  className="peer hidden"
                  checked
                />
                <label
                  htmlFor="no"
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "0.5rem",
                    padding: "0.5rem",
                    textAlign: "center",
                    minWidth: "200px",
                    cursor: "pointer",
                  }}
                  className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                >
                  No
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-xl bg-white p-2 mb-2">
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="diabetes"
                    value="diabetes"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="diabetes"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    Diabetes
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="testosteroneDeficiency"
                    value="testosteroneDeficiency"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="testosteroneDeficiency"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px] "
                  >
                    Testosterone Deficiency
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="pressure"
                    value="pressure"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="pressure"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    High Blood Pressure
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="heartDisease"
                    value="heartDisease"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="heartDisease"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    Heart Disease / Stroke
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="cholesterol"
                    value="cholesterol"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="cholesterol"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    High Cholesterol
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="eatingDisorder"
                    value="eatingDisorder"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="eatingDisorder"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    Eating Disorder
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="depression"
                    value="depression"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="depression"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    Depression
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="risk"
                    id="others"
                    value="others"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="others"
                    style={{
                      border: "1px solid lightgray",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      textAlign: "center",
                      minWidth: "200px",
                      cursor: "pointer",
                    }}
                    className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white min-w-[200px]"
                  >
                    Others
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">
              <Link href="/profileSetup3" className="no-underline">
                <ButtonPrimary title="Back" className="block" />
              </Link>
            </div>
            <div className="">
              <Link href="/profileSetup5" className="no-underline">
                <ButtonPrimary title="Next" className="block" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profileSetup4;
