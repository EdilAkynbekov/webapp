import type { NextPage } from "next";
import { useState, useEffect } from "react";
import RightPanel from "../components/recipe/right-panel";
import MedicalBack from "../components/profile/MedicalBack";
import DietaryPref from "../components/profile/DietaryPref";
import BasicInfo from "../components/profile/basic-info";

const ProfileA: NextPage = () => {
  const [activeTab, setActiveTab] = useState("BasicInformation");

  const renderContent = () => {
    switch (activeTab) {
      case "MedicalBackground":
        return <MedicalBack />;
      case "DietaryPreferences":
        return <DietaryPref />;
      case "BasicInformation":
      default:
        return <BasicInfo />;
    }
  };
  return (
    <div className="w-full relative bg-[#FFB527] min-h-screen overflow-y-auto flex flex-row items-start justify-center py-0 lg:pr-10 lg:pl-0 box-border gap-[40px] text-center text-[11px]  font-bold text-black1 font-poppins">
      <RightPanel />
      <div className="flex-1 overflow-y-auto flex flex-col items-start justify-start py-10 px-0 lg:pl-[260px] gap-[35px] text-left text-45xl text-white">
        <div className="self-stretch flex flex-row items-start justify-start gap-[35px]">
          <div className="flex-1 flex flex-row items-end justify-center">
            <div className="flex-1 flex flex-row items-center justify-start py-5 px-0">
              <b className="relative tracking-[-0.02em] leading-[18.07px]">
                Profile
              </b>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-[22px] text-right text-[22px] text-black1">
            <img
              className="w-[60px] relative rounded-[82.5px] h-[60px] object-cover"
              alt=""
              src="/image 17.svg"
            />
            <div className="flex flex-col items-end justify-center">
              <b className="self-stretch relative tracking-[-0.02em] leading-[18.07px]">
                Adam Smith
              </b>
              <div className="self-stretch relative text-base tracking-[-0.02em] leading-[20px] font-semibold text-gray-200 flex items-center h-[26px] shrink-0">
                16783927392398
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full px-5">
          <button
            onClick={() => setActiveTab("BasicInformation")}
            className={`text-[11px] font-poppins font-bold text-white w-[83px]  rounded-sm cursor-pointer ${
              activeTab === "BasicInformation"
                ? " bg-[#333333]"
                : " bg-[#808080] bg-opacity-50 hover:bg-[#333333] hover:bg-opacity-65"
            }`}
          >
            Basic Information
          </button>
          <button
            onClick={() => setActiveTab("MedicalBackground")}
            className={`text-[11px] font-poppins font-bold text-white w-[100px]  rounded-sm cursor-pointer ${
              activeTab === "MedicalBackground"
                ? " bg-[#333333]"
                : " bg-[#808080] bg-opacity-50 hover:bg-[#333333] hover:bg-opacity-65"
            }`}
          >
            Medical Background
          </button>
          <button
            onClick={() => setActiveTab("DietaryPreferences")}
            className={`text-[11px] font-poppins font-bold text-white w-[100px]  rounded-sm cursor-pointer ${
              activeTab === "DietaryPreferences"
                ? "bg-[#333333]"
                : "bg-[#808080] bg-opacity-50 hover:bg-[#333333] hover:bg-opacity-65"
            }`}
          >
            Dietary Preferences
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-center text-[18px] xl:text-xl text-black1">
          {" "}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileA;
