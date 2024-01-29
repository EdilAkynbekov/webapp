import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Setup1a: NextPage = () => {
  const router = useRouter();

  const onSignOutClick = useCallback(() => {
    router.push("/profile-setup1");
  }, [router]);

  return (
    <div className="w-full relative bg-saddlebrown overflow-hidden flex flex-row items-center justify-center py-[100px] px-[120px] box-border text-left text-lg text-black1 font-poppins">
      <div className="flex-1 rounded-xl bg-white overflow-y-auto flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-start justify-start py-5 px-20 gap-[26px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10"
            onClick={onSignOutClick}
          >
            <img
              className="relative w-[33.2px] h-[33.3px]"
              alt=""
              src="/subtract.svg"
            />
          </button>
          <div className="self-stretch relative font-semibold flex items-center h-5 shrink-0">
            Tell us more about you
          </div>
        </div>
        <div className="self-stretch flex flex-col md:flex-row items-start justify-center py-0 px-20 gap-[80px] text-orange">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-[5px] pb-[26px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Birthday
              </div>
              <div className="relative bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-between border-[1px] border-solid border-gray"></div>
              <div className="w-[345px] relative text-xs text-black1 hidden">
                Info Text
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Phone Number
              </div>
              <input
                className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
                placeholder="XXXX XXXX"
                type="text"
              />
              <div className="self-stretch relative text-sm text-black1" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[7px]">
              <div className="self-stretch relative font-semibold">Gender</div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[30px]">
                <button className="cursor-pointer py-2.5 px-5 bg-white w-[115px] rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center border-[1px] border-solid border-white">
                  <div className="w-[75px] relative text-base font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                    Male
                  </div>
                </button>
                <button className="cursor-pointer py-2.5 px-[30px] bg-white w-[119px] rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-center border-[1px] border-solid border-white">
                  <div className="w-[79px] relative text-base font-semibold font-poppins text-darkslategray text-center flex items-center justify-center">
                    Female
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Height (cm)
              </div>
              <input
                className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
                placeholder="0"
                type="text"
              />
              <div className="self-stretch relative text-xs">Info Text</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[3px]">
              <div className="self-stretch relative font-semibold">
                Weight (kg)
              </div>
              <input
                className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded-8xs flex flex-row items-center justify-start p-2.5 text-gray border-[1px] border-solid border-gray"
                placeholder="0"
                type="text"
              />
              <div className="self-stretch relative text-sm">Info Text</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start p-[5px] gap-[7px]">
              <div className="self-stretch relative font-semibold">
                Number of Meals Per Day
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[15px]">
                <button className="cursor-pointer py-2.5 px-5 bg-white rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start border-[1px] border-solid border-white">
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    2
                  </div>
                </button>
                <button className="cursor-pointer py-2.5 px-5 bg-white rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start border-[1px] border-solid border-white">
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    3
                  </div>
                </button>
                <button className="cursor-pointer py-2.5 px-5 bg-white rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start border-[1px] border-solid border-white">
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    4
                  </div>
                </button>
                <button className="cursor-pointer py-2.5 px-5 bg-white rounded-8xs shadow-[0px_1px_10px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start border-[1px] border-solid border-white">
                  <div className="relative text-lg font-semibold font-poppins text-darkslategray text-center">
                    5
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch relative text-xs text-black1">
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
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-end py-5 px-[70px]">
          <button className="cursor-pointer [border:none] py-1 px-[18px] bg-orange w-[103px] rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border">
            <b className="flex-1 relative text-lg font-poppins text-white text-center">
              Next
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setup1a;
