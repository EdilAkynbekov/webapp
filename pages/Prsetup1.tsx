import type { NextPage } from "next";

const Setup1: NextPage = () => {
  return (
    <div className="w-full relative bg-orange overflow-hidden flex flex-row items-center justify-center py-10 px-5 box-border tracking-[normal]">
      <section className="w-[951px] rounded-[50px] bg-white overflow-y-auto shrink-0 flex flex-col items-end justify-start py-5 px-0 box-border lg:gap-[54px] max-w-full gap-[27px] min-h-[600px]">
        <div className=" flex-col sm:flex-row justify-center md:gap-16 lg:gap-52 flex">
          <div className="flex flex-col">
            <div className="mb-2">
              <h1 className=" text-gray-700 text-2xl font-bold mb-2">
                Phone Number
              </h1>

              <input
                type="text"
                name=""
                id="phone"
                className="shadow appearance-none border rounded pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <h1 className=" text-gray-700 text-2xl font-bold mb-2">Gender</h1>
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-white p-2">
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  className="peer hidden"
                  checked
                />
                <label
                  htmlFor="male"
                  className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white"
                >
                  Male
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  className="peer hidden"
                />
                <label
                  htmlFor="female"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white"
                >
                  Female
                </label>
              </div>
            </div>
            <div className="mb-2">
              <h1 className=" text-gray-700 text-2xl font-bold mb-2">
                Birthday
              </h1>

              <input
                type="date"
                name=""
                id="birthday"
                className="shadow appearance-none border rounded pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex sm:flex-row flex-col gap-3 mb-2">
              <div className="flex flex-col">
                <h1 className=" text-gray-700 text-2xl font-bold mb-2">
                  Weight (kg)
                </h1>
                <input
                  type="number"
                  name=""
                  id="phone"
                  className="shadow appearance-none border rounded pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <h1 className=" text-gray-700 text-2xl font-bold mb-2">
                  Height (cm)
                </h1>
                <input
                  type="number"
                  name=""
                  id="phone"
                  className="shadow appearance-none border rounded pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <h1 className=" text-gray-700 text-2xl font-bold mb-2">
              Number of Meals Per Day
            </h1>
            <div className="grid grid-cols-5 gap-2 rounded-xl bg-white p-2 mb-2">
              <div>
                <input
                  type="radio"
                  name="meals"
                  id="1"
                  value="1"
                  className="peer hidden"
                  checked
                />
                <label
                  htmlFor="1"
                  className="block cursor-pointer select-none  rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white"
                >
                  1
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="meals"
                  id="2"
                  value="2"
                  className="peer hidden"
                />
                <label
                  htmlFor="2"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white"
                >
                  2
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="meals"
                  id="3"
                  value="3"
                  className="peer hidden"
                />
                <label
                  htmlFor="3"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white"
                >
                  3
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="meals"
                  id="4"
                  value="4"
                  className="peer hidden"
                />
                <label
                  htmlFor="4"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white"
                >
                  4
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="meals"
                  id="5"
                  value="5"
                  className="peer hidden"
                />
                <label
                  htmlFor="5"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange peer-checked:font-bold peer-checked:text-white"
                >
                  5
                </label>
              </div>
            </div>
            <div className="flex flex-col max-w-[410px]">
              <p className="mx-2 p-0">
                Individuals with the following conditions are NOT recommended to
                follow a diet consisting of less than 3 meals per day.
              </p>
              <ol className="mx-2 p-3 my-0">
                <li>Eating Disorder</li>
                <li>Type 1 & Type 2 Diabetes</li>
                <li>3. Pregnant / Breastfeeding </li>
                <li>4. Weight Gain Diet</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="w-[243px] flex flex-row items-start justify-start py-0 px-[70px] box-border">
          <button className="cursor-pointer [border:none] p-1.5 bg-orange flex-1 rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center hover:bg-darkgoldenrod">
            <b className="h-[27px] relative text-lg flex font-poppins text-white text-center items-center justify-center">
              Next
            </b>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Setup1;
