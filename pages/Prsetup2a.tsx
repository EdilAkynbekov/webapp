import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Setup2a = () => {
  const router = useRouter();

  const onSignOutClick = useCallback(() => {
    router.push("/profile-setup1");
  }, [router]);

  return (
    <div className="bg-orange py-[10px] px-[20px] md:py-[33px] md:px-[30px] lg:py-[66px] lg:px-[30px] xl:py-[60px] xl:px-[100px] text-left text-base text-black1 font-poppins ">
      <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start gap-[10px] z-[0]">
        <div className="self-stretch flex flex-col items-start justify-start py-5 px-[20px] md:px-[50px] lg:px-20 gap-[26px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10"
            onClick={onSignOutClick}
          >
            <Image
              className="relative w-[33.2px] h-[33.3px]"
              src="/subtract.svg"
              alt="Back"
              width={33.2}
              height={33.3}
            />
            Back
          </button>
          <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0 text-mid md:text-lg lg:text-2xl">
            What is your goal?
          </div>
        </div>
        {/* Activity Level Options */}
        {/* Repeat this block for each activity level option */}
        {/*Box start*/}
        <div className="self-stretch flex flex-col md:flex-row items-center justify-center py-2.5 px-[10px] md:pr-[20px] md:pl-[30px] lg:pl-[60px] xl:pl-[50px] gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[30px] 2xl:gap-[50px]">
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-[90px] py-4  md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)]">
                <div className="space-y-2">
                  <button className="w-full  cursor-pointer [border:none] bg-white flex-1  rounded-8xs ">
                    <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center [text-shadow:0px_1px_10px_rgba(0,_0,_0,_0.25)] whitespace-nowrap overflow-hidden">
                      Low Active
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-inherit text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
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
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-[90px] py-4  md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)]">
                <div className="space-y-2">
                  <button className="w-full  cursor-pointer [border:none] bg-white flex-1  rounded-8xs ">
                    <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center [text-shadow:0px_1px_10px_rgba(0,_0,_0,_0.25)] whitespace-nowrap overflow-hidden">
                      Sedentary
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-inherit text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
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
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-[90px] py-4  md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)]">
                <div className="space-y-2">
                  <button className="w-full  cursor-pointer [border:none] bg-white flex-1  rounded-8xs ">
                    <div className="relative max-w-[200px] px-[15px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center [text-shadow:0px_1px_10px_rgba(0,_0,_0,_0.25)] whitespace-nowrap overflow-hidden">
                      Active
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-inherit text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
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
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-[90px] py-4  md:px-24 md:py-6 lg:px-26 xl:px-40 2xl:px-48 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)]">
                <div className="space-y-2">
                  <button className="w-full  cursor-pointer [border:none] bg-white flex-1  rounded-8xs ">
                    <div className="relative max-w-[200px] text-xs md:text-xs lg:text-mid font-semibold font-poppins text-darkslategray text-center [text-shadow:0px_1px_10px_rgba(0,_0,_0,_0.25)] whitespace-nowrap overflow-hidden">
                      Very Active
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex justify-start space-x-6">
                <div className="space-y-2 flex justify-start max-[100px]">
                  <ul className="m-0 font-inherit text-xs md:text-mini lg:text-mid xl:text-lg pl-4 pr-2 md:pr-[20px] lg:pr-20 overflow-hidden">
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
        <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
          <button className="cursor-pointer [border:none] py-1 px-[18px] bg-orange w-[103px] rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] h-[39px] flex flex-row items-center justify-center box-border">
            <b className="relative text-lg font-poppins text-white text-center">
              Next
            </b>
          </button>
        </div>
      </div>
      {/* Additional buttons or elements */}
    </div>
  );
};

export default Setup2a;
