import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Link from "next/link";
import SubmitButton from "../components/submit-button";
import Google from "../components/google";
import Facebook from "../components/facebook";

const ProfileSetup1b: NextPage = () => {
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [inputField1Value, setInputField1Value] = useState("");
  const [inputField3Value, setInputField3Value] = useState("");
  const [inputField4Value, setInputField4Value] = useState("");

  const onProfileSetup1bClick = useCallback(() => {
    // Please sync "diet goal (cindy)" to the project
  }, []);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "Profile Setup 2" to the project
  }, []);

  const onSignIn2Click = useCallback(() => {
    // Please sync "🥊 Dashboard View (Cindy)" to the project
  }, []);

  return (
    <div
      className="relative bg-orange w-full h-[832px] overflow-hidden cursor-pointer text-left text-lg text-black1 font-poppins"
      onClick={onProfileSetup1bClick}
    >
      <div className="mt-4 text-center">
        <Link href="/signin2">Sign Up</Link>
      </div>
      <img
        className="absolute top-[0px] left-[-4px] rounded-t-sm rounded-b-none w-[505px] h-[832px] object-cover"
        alt=""
        src="/img@2x.png"
      />
      <div className="absolute top-[0px] left-[501px] [background:linear-gradient(180deg,_#ffb527,_rgba(217,_217,_217,_0))] w-[832px] h-[501px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[766px] left-[538px] flex flex-row items-start justify-start gap-[32px]">
        <div className="relative rounded-[50%] bg-black1 box-border w-[15px] h-[15px] border-[1px] border-solid border-black1" />
        <div className="relative rounded-[50%] bg-white w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-background-green-10 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-background-green-10 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-background-green-10 w-[15px] h-[15px]" />
      </div>
      <div className="absolute top-[calc(50%_-_255px)] left-[calc(50%_-_478px)] rounded-lg w-[941px] h-[498px] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[8px] top-[8px] [transform:scale(1.201)]"
          alt=""
          src="/rectangle-297@2x.png"
        />
      </div>
      <input
        className="[outline:none] font-body text-base bg-[transparent] absolute top-[235px] left-[216px] rounded box-border w-[375px] h-12 py-[13px] px-4 text-black-60 border-[1px] border-solid border-black-20"
        placeholder="Phone Number"
        type="text"
        value={inputFieldValue}
        onChange={(event) => setInputFieldValue(event.target.value)}
      />
      <div className="absolute bg-[transparent] top-[351px] left-[216px] rounded box-border w-[375px] h-12 border-[1px] border-solid border-black-20">
        <input
          className="[outline:none] font-body text-base py-[13px] px-4 text-black-60 [border:none] w-full h-full [background:transparent]"
          placeholder="Date of Birth"
          type="text"
          value={inputField1Value}
          onChange={(event) => setInputField1Value(event.target.value)}
        />

        <img
          className="absolute w-[18px] h-[18px] overflow-hidden shrink-0 object-cover z-[2] right-[16px] top-[15px]"
          alt=""
          src="/calendar@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[467px] left-[216px] w-[180px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[103.33%] top-[-3px] right-[-1.67%] left-[-1.67%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              Male
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <input
        className="[outline:none] font-body text-base bg-[transparent] absolute top-[235px] left-[648px] rounded box-border w-[180px] h-12 py-[13px] px-[46.5px] text-black-60 border-[1px] border-solid border-black-20"
        placeholder="Weight (kg)"
        type="text"
        value={inputField3Value}
        onChange={(event) => setInputField3Value(event.target.value)}
      />
      <input
        className="[outline:none] font-body text-base bg-[transparent] absolute top-[235px] left-[843px] rounded box-border w-[180px] h-12 py-[13px] px-[45.5px] text-black-60 border-[1px] border-solid border-black-20"
        placeholder="Height (cm)"
        type="text"
        value={inputField4Value}
        onChange={(event) => setInputField4Value(event.target.value)}
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[467px] left-[411px] w-[179px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[103.35%] top-[-3px] right-[-1.68%] left-[-1.68%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              Female
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[587px] left-[938px] shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] w-[110px] h-10"
        onClick={onGroupButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-[50px] bg-orange w-[110px] h-10" />
        <b className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_33px)] text-lg flex font-poppins text-white text-center items-center justify-center w-[67px] h-8">
          Next
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[351px] left-[650px] w-[85px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[107.06%] top-[-3px] right-[-3.53%] left-[-3.53%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              2
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[351px] left-[752px] w-[85px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[107.06%] top-[-3px] right-[-3.53%] left-[-3.53%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              3
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[351px] left-[862px] w-[85px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[107.06%] top-[-3px] right-[-3.53%] left-[-3.53%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              4
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[351px] left-[962px] w-[85px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[107.06%] top-[-3px] right-[-3.53%] left-[-3.53%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              5
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <div className="absolute top-[387px] left-[650px] flex items-center w-[386px] h-[200px] text-xs">
        <span className="w-full">
          <p className="m-0">
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
          <p className="m-0">
            <span>
              <span>
                <span>{`2. Type 1 & Type 2 Diabetes`}</span>
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>
                <span>3. Pregnant / Breastfeeding</span>
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>
                <span>4. Weight Gain Diet</span>
              </span>
            </span>
          </p>
        </span>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[583px] left-[216px] w-[180px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[103.33%] top-[-3px] right-[-1.67%] left-[-1.67%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              Yes
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[583px] left-[411px] w-[179px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute w-[103.35%] top-[-3px] right-[-1.68%] left-[-1.68%] rounded box-border h-[54px] hidden border-[3px] border-solid border-black-20" />
          <div className="absolute top-[56px] left-[0px] hidden flex-row items-start justify-start gap-[3px]">
            <img
              className="relative w-[13px] h-[13px] overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/exclamation@2x.png"
            />
            <div className="relative text-xs leading-[120%] font-body text-black-60 text-left">
              Message
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded box-border h-12 overflow-hidden flex flex-row items-center justify-center py-[13px] px-4 border-[1px] border-solid border-black-20">
            <div className="hidden flex-row items-start justify-start py-0 pr-2 pl-0">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/email-mail@2x.png"
              />
            </div>
            <div className="self-stretch relative rounded-12xs bg-black w-px hidden" />
            <div className="relative text-base leading-[140%] font-body text-black-60 text-left">
              No
            </div>
            <div className="relative rounded-12xs bg-black w-px h-[22px] hidden" />
            <div className="flex-1 relative rounded-12xs h-[22px] hidden" />
            <img
              className="relative w-[18px] h-[18px] object-cover hidden"
              alt=""
              src="/arrow-down@2x.png"
            />
          </div>
        </div>
      </button>
      <div className="absolute w-[16.02%] top-[calc(50%_-_99px)] left-[16.88%] font-semibold flex items-center h-5">
        Birthday
      </div>
      <div className="absolute w-[16.02%] top-[calc(50%_-_215px)] left-[16.88%] font-semibold flex items-center h-5">
        Phone Number
      </div>
      <div className="absolute w-[16.02%] top-[calc(50%_+_17px)] left-[16.88%] font-semibold flex items-center h-5">
        Gender
      </div>
      <div className="absolute w-[16.02%] top-[calc(50%_+_133px)] left-[16.88%] font-semibold flex items-center h-5">
        Are you pregnant?
      </div>
      <div className="absolute w-[16.02%] top-[calc(50%_-_215px)] left-[50.63%] font-semibold flex items-center h-5">
        Weight (kg)
      </div>
      <div className="absolute w-[16.02%] top-[calc(50%_-_215px)] left-[65.86%] font-semibold flex items-center h-5">
        Height (cm)
      </div>
      <div className="absolute w-[20.78%] top-[calc(50%_-_99px)] left-[50.78%] font-semibold flex items-center h-5">
        Number of Meals Per Day
      </div>
    </div>
  );
};

export default ProfileSetup1b;
