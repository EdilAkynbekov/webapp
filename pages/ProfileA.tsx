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
    <div className="w-full relative bg-[#FFB527] min-h-screen overflow-y-auto flex flex-row items-start justify-center py-0 pr-[30px] pl-[30px] md:pr-0 md:pl-0 lg:pr-10 lg:pl-0 box-border gap-[40px] text-center text-xs text-black1 font-poppins">
      <RightPanel />
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center py-10 px-0 lg:pl-[200px] gap-[35px] text-left text-45xl text-white">
        {/* Conditional Top Bar for Mobile */}
        <div className="self-stretch flex flex-row items-center justify-center px-[0px] md:px-20 text-left ">
          <div className="flex-1 flex flex-row items-end justify-center">
            <div className="flex-1 flex flex-row items-center justify-start py-5 px-0">
              <b className="relative tracking-[-0.02em] leading-[18.07px]">
                Profile
              </b>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[0px_12px] text-right text-base text-black1">
            <img
              className="w-10 relative rounded-63xl-5 h-10 object-cover"
              alt=""
              src="/image 17.svg"
            />
            <div className="flex flex-col items-end justify-center">
              <b className="self-stretch relative tracking-[-0.02em] leading-[18.07px]">
                Adam Smith
              </b>
              <div className="self-stretch relative text-xs tracking-[-0.02em] leading-[20px] font-semibold text-gray-200 flex items-center h-3.5 shrink-0">
                16783927392398
              </div>
            </div>
          </div>
        </div>

        {isMobile && <MobileTopBar />}

        {/* Profile Sections */}
        <div className={`w-[80%] hidden md:block items-center justify-center`}>
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px] text-center text-[18px] xl:text-xl text-black1">
            <div className="self-stretch rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start p-5 gap-[10px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
                  <div className="relative font-semibold">
                    Basic Information
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[5px] px-0">
                  <div className="flex-1 flex flex-col items-end justify-center">
                    <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-black1 w-[100px] rounded-81xl flex flex-row items-center justify-center box-border text-white hover:bg-slate-200 hover:text-black1">
                      <b className="relative text-base font-poppins  text-center">
                        Edit
                      </b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[8px] text-left text-[11px] xl:text-sm text-[#565657]">
                <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Birthday
                    </b>
                  </div>
                  <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                      2002-04-14
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Age
                    </b>
                  </div>
                  <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                      21
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Gender
                    </b>
                  </div>
                  <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                      Male
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Height (cm)
                    </b>
                  </div>
                  <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                      180
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Smoking
                    </b>
                  </div>
                  <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                      Yes
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center text-[10px] xl:text-[14px]">
                      Alcohol intake
                    </b>
                  </div>
                  <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                      Occasional
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
                <div className="relative font-semibold">
                  Contact Information
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-left text-[11px] xl:text-sm text-[#565657]">
                <div className="flex-1 md:max-w-[150px] lg:max-w-[300px] rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className=" self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Phone
                    </b>
                  </div>
                  <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                      98758390
                    </div>
                  </div>
                </div>
                <div className="flex-1 max-w-[400px] self-stretch rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Email Address
                    </b>
                  </div>
                  <div className="self-stretch  relative h-[23px] text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">{`adamsmith@gmail.com `}</div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-[#FFB527] bg-opacity-[48%] h-[100px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                  <div className="self-stretch relative h-[22px]">
                    <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                      Home Address
                    </b>
                  </div>
                  <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
                    <div className="absolute h-full w-full top-[0%] left-[0%] leading-[18.07px] font-semibold inline-block">
                      47 Apple Street, Causeway Bay 47 Apple Street, Causeway
                      Bay
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-5 px-5 pb-[30px] gap-[10px]">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
                    <div className="relative font-semibold">
                      Medical Background
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center py-[5px] px-0">
                    <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-black1 w-[100px] rounded-81xl flex flex-row items-center text-white justify-center box-border hover:bg-slate-200 hover:text-black1">
                      <b className="relative text-base font-poppins text-center">
                        Edit
                      </b>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-sm ">
                  <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                    <div className="self-stretch relative h-[22px]">
                      <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                        Medical History
                      </b>
                    </div>
                    <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                      <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                        None
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                    <div className="self-stretch relative h-[22px]">
                      <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                        Allergy
                      </b>
                    </div>
                    <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                      <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                        Nuts, Dairy
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                    <div className="self-stretch relative h-[22px]">
                      <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                        Medication
                      </b>
                    </div>
                    <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                      <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                        None
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-[#8E8E8E] h-[150px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                    <div className="self-stretch relative h-[22px]">
                      <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                        Supplement Intake
                      </b>
                    </div>
                    <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
                      <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                        Omega-3 Fatty Acid | 640mg, Vitamin D3 | 125 mcg
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-5 px-5 pb-[30px] gap-[10px]">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className=" flex flex-row items-center justify-start py-[5px] px-0 box-border">
                    <div className="relative font-semibold">
                      Dietary Preferences
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center py-[5px] px-0">
                    <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-black1 w-[100px] rounded-81xl flex flex-row items-center justify-center box-border text-white hover:bg-slate-200 hover:text-black1">
                      <b className="relative text-base font-poppins  text-center">
                        Edit
                      </b>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-sm text-floralwhite">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="w-[50%] rounded-3xs bg-[#FFB527] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                      <div className="flex-1 self-stretch relative h-[22px]">
                        <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                          Dietary Type
                        </b>
                      </div>
                      <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                        <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                          High Protein
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 w-[50%] self-stretch ml-4 rounded-3xs bg-[#FFB527] h-[60px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                      <div className="self-stretch relative h-[22px]">
                        <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                          Meals Per Day
                        </b>
                      </div>
                      <div className="self-stretch relative h-[23px] text-[12px] xl:text-mini text-black1">
                        <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-[#FFB527] h-20 flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                    <div className="self-stretch relative h-[22px]">
                      <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                        Cooking Equipment
                      </b>
                    </div>
                    <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
                      <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                        Rice Cooker, Oven, Blender, Air Fryer
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs bg-[#FFB527] h-[150px] flex flex-col items-start justify-center py-[5px] px-[15px] box-border">
                    <div className="self-stretch relative h-[22px]">
                      <b className="absolute h-full w-full top-[0%] left-[0%] flex items-center">
                        Food Preferences
                      </b>
                    </div>
                    <div className="self-stretch flex-1 relative text-[12px] xl:text-mini text-black1">
                      <div className="absolute h-full w-full top-[0%] left-[0%] font-semibold inline-block">
                        Beef, Chicken, Fish, Rice
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileTopBar = () => {
  const [activeTab, setActiveTab] = useState("BasicInfo");

  const buttonBaseStyle =
    "self-stretch cursor-pointer border-none p-3 flex-1 rounded-3xs flex items-center justify-center text-sm10 text-bold leading-[13px] font-poppins text-center";
  const activeButtonStyle = "bg-black text-white";
  const inactiveButtonStyle =
    "bg-[#808080] bg-opacity-50 text-white hover:bg-brown";

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
      {/* Tabs */}
      <div className="flex justify-between gap-7">
        <button
          onClick={() => setActiveTab("BasicInfo")}
          className={`text-bold ${buttonBaseStyle} ${
            activeTab === "BasicInfo" ? activeButtonStyle : inactiveButtonStyle
          }`}
        >
          <b>
            <p className="m-0">Basic</p>
            <p className="m-0">Information</p>
          </b>
        </button>
        <button
          onClick={() => setActiveTab("MedicalBack")}
          className={`text-bold ${buttonBaseStyle} ${
            activeTab === "MedicalBack"
              ? activeButtonStyle
              : inactiveButtonStyle
          }`}
        >
          <b>
            <p className="m-0">Medical</p>
            <p className="m-0">Background</p>
          </b>
        </button>
        <button
          onClick={() => setActiveTab("DietaryPref")}
          className={`text-bold ${buttonBaseStyle} ${
            activeTab === "DietaryPref"
              ? activeButtonStyle
              : inactiveButtonStyle
          }`}
        >
          <b>
            <p className="m-0">Dietary</p>
            <p className="m-0">Preferences</p>
          </b>
        </button>
      </div>
      {/* Content Based on Selection */}
      {renderContent()}
    </>
  );
};

export default ProfileA;
