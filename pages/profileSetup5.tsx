import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";

const profileSetup5 = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-orange">
      <div className="m-8 lg:w-2/3">
        <form className="bg-white shadow-md rounded-xl my-7 p-8  md:py-16 md:px-8 lg:px-20">
          <div className="flex-col sm:flex-row justify-center md:gap-16 lg:gap-52 flex">
            <div className="flex flex-col mb-8 md:mb-20">
              <h1 className=" text-gray-700 text-2xl font-bold mb-8 md:mb-16">
                Are you allergic to anything?
              </h1>
              <div className="p-4">
                <input
                  type="radio"
                  name="allergic"
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
                    name="allergic"
                    id="egg"
                    value="egg"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="egg"
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
                    Egg
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="milk"
                    value="milk"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="milk"
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
                    Milk
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="soy"
                    value="soy"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="soy"
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
                    Soy
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="peanuts"
                    value="peanuts"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="peanuts"
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
                    Peanuts
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="sesame"
                    value="sesame"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="sesame"
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
                    Sesame
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="fish"
                    value="fish"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="fish"
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
                    Fish
                  </label>
                </div>

                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="buckwheat"
                    value="buckwheat"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="buckwheat"
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
                    Buckwheat
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="mustard"
                    value="mustard"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="mustard"
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
                    Mustard
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="cereals"
                    value="cereals"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="cereals"
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
                    Cereals w/ Gluten
                  </label>
                  <p>Barley, Oats, Rye, Wheat, Flour, etc</p>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="nuts"
                    value="nuts"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="nuts"
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
                    Tree Nuts
                  </label>
                  <p>
                    Almond, Cashew, Hazelnut, Pecan, Pine Nut, Pistachio,
                    Walnuts, etc
                  </p>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="crustacean"
                    value="crustacean"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="crustacean"
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
                    Crustacean Shellfish
                  </label>
                  <p>Crab, Lobster, Prawns, Shrimp, etc</p>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="molluscan"
                    value="molluscan"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="molluscan"
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
                    Molluscan Shellfish
                  </label>
                  <p>
                    Abalone, Oyster, Mussel, Scallop, Squid, Octopus, Clams, etc
                  </p>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="lupin"
                    value="lupin"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="lupin"
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
                    Lupin
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
                    id="celery"
                    value="celery"
                    className="peer hidden"
                    checked
                  />
                  <label
                    htmlFor="celery"
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
                    Celery
                  </label>
                </div>
                <div className="p-4">
                  <input
                    type="radio"
                    name="allergic"
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
              <Link href="/profileSetup4" className="no-underline">
                <ButtonPrimary title="Back" className="block" />
              </Link>
            </div>
            <div className="">
              <Link href="/" className="no-underline">
                <ButtonPrimary title="Next" className="block" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profileSetup5;
