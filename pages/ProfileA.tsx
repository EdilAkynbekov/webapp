import { useState, useEffect } from "react";
import RightPanel from "../components/recipe/right-panel";
import BasicInfo from "../components/profile/basic-info";
import DietaryPref from "../components/profile/DietaryPref";
import MedicalBack from "../components/profile/MedicalBack";
const ProfileA = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // This could be 768 for tablets or whichever breakpoint you choose
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full relative bg-[#FFB527] min-h-screen overflow-y-auto flex flex-row items-start justify-center py-0 pr-10 pl-10 lg:pr-10 lg:pl-0 box-border gap-[40px] text-center text-xs text-black1 font-poppins">
      <RightPanel />
      <div className="flex-1 overflow-y-auto flex flex-col items-start justify-start py-10 px-0 lg:pl-[260px] gap-[35px] text-left text-45xl text-white">
        {/* Conditional Top Bar for Mobile */}
        {isMobile && <MobileTopBar />}

        {/* Profile Sections */}
        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3 gap-4"}`}
        >
          <BasicInfo />
          <MedicalBack />
          <DietaryPref />
        </div>
      </div>
    </div>
  );
};

const MobileTopBar = () => {
  const [activeTab, setActiveTab] = useState("BasicInfo");

  const renderContent = () => {
    switch (activeTab) {
      case "MedicalBack":
        return <MedicalBack />;
      case "DietaryPref":
        return <DietaryPref />;
      case "BasicInfo":
      default:
        return <BasicInfo />;
    }
  };

  return (
    <>
      <div className="flex justify-between w-full px-5">
        <button onClick={() => setActiveTab("BasicInfo")} className="text-xs">
          Basic Information
        </button>
        <button onClick={() => setActiveTab("MedicalBack")} className="text-xs">
          Medical Background
        </button>
        <button onClick={() => setActiveTab("DietaryPref")} className="text-xs">
          Dietary Preferences
        </button>
      </div>
      {/* Content Based on Selection */}
      {renderContent()}
    </>
  );
};

export default ProfileA;
