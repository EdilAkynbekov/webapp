import RightPanel from "../components/recipe/right-panel";
import type { NextPage } from "next";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

import Switch, { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

type ActivityLevel =
  | "pan"
  | "wok"
  | "skillet"
  | "pot"
  | "stockpot"
  | "saucepan"
  | "blender"
  | "ricecooker"
  | "oven"
  | "fryer"
  | "steamer"
  | "sous"
  | "pressure";

const RecipeProfileA: NextPage = () => {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  // Explicitly set the type of the state to an array of ActivityLevel
  const [activityLevel, setActivityLevel] = useState<ActivityLevel[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelect = (level: ActivityLevel) => {
    setActivityLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleClick = () => {
    console.log("Pressed");
    setIsPressed(true);

    if (activityLevel.length === 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false); // Hide error message if at least one option is selected
      router.push("/Recipe"); // Navigate to "Prsetup5a" page
    }
  };

  const isSelected = (level: ActivityLevel) => activityLevel.includes(level);
  return (
    <div className="w-full min-h-screen bg-orange overflow-y-auto flex flex-row items-start justify-start py-0 pr-10 pl-0 box-border gap-[40px] tracking-[normal] text-center text-xs text-black font-poppins mq675:gap-[40px] mq750:pl-5 mq750:box-border">
      <RightPanel />

      <section className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border max-w-[calc(100%_-_260px)] text-center text-lg text-orange font-poppins mq750:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full pr-20">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-between gap-[45px] max-w-full pr-4">
            <div className="flex flex-row items-start justify-start py-5 px-0 box-border min-w-[216px] max-w-full text-left text-[64px] text-white">
              <h1 className="m-0 w-[216px] relative text-inherit leading-[18.07px] font-bold font-inherit flex items-center mq750:text-[51px] mq750:leading-[14px] mq450:text-[38px] mq450:leading-[11px]">
                Recipe
              </h1>
            </div>
            <div className="w-[117px] flex flex-row gap-[40px] items-end justify-center">
              <div className="self-stretch rounded-xl cursor-pointer bg-[#808080] hover:bg-white shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center py-1 px-[25px]">
                <h3 className="m-0 h-[27px] relative text-inherit font-bold font-inherit flex items-center justify-center">
                  Leave
                </h3>
              </div>
              <div className="self-stretch rounded-xl bg-black cursor-pointer hover:bg-white shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center py-1 px-[25px]">
                <h3 className="m-0 h-[27px] relative text-inherit font-bold font-inherit flex items-center justify-center">
                  Cook
                </h3>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-white overflow-y-auto flex flex-row items-start justify-center py-[30px] px-5 box-border gap-[20px] max-w-full text-left text-[15px] mq750:flex-wrap mq750:pt-5 mq750:pb-5 mq750:box-border">
            <div className="w-full flex-1 flex-col items-start justify-start py-10 px-0 box-border gap-[30px] min-w-[435px] min-h-[603px] max-w-full mq675:pt-[26px] mq675:pb-[26px] mq675:box-border mq675:min-w-full mq750:flex-1 mq750:min-h-[auto]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[20px] mq450:flex-wrap">
                <button className="cursor-pointer [border:none] py-0 px-2.5 bg-orange rounded-xl flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="h-[21px] relative text-sm font-semibold font-poppins text-black text-center inline-block">
                      Blender
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-2.5 bg-orange rounded-xl flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="h-[21px] relative text-sm font-semibold font-poppins text-black text-center inline-block">
                      Pan
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-2.5 bg-orange rounded-xl flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="h-[21px] relative text-sm font-semibold font-poppins text-black text-center inline-block">
                      Oven
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-4 px-0 pb-4 box-border max-w-full">
                <div className="flex-1 relative font-semibold inline-block max-w-full">
                  Vegetarian | Vegan | High Protein
                </div>
              </div>
              <div className="self-stretch max-w-[600px] h-[291px] flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                  loading="eager"
                  alt=""
                  src="/image 59.svg"
                />
              </div>
              <h1 className="m-0 self-stretch h-[72px] relative text-[24px] font-semibold font-inherit text-black inline-block mq450:text-[19px]">
                Beetroot Tofu Pasta with Roasted Broccoli
              </h1>
            </div>
            <div className="w-full rounded-xl bg-orange flex-1 flex-col items-end justify-start py-8 px-0 box-border gap-[20px] max-w-full text-right text-lg mq675:pt-[21px] mq675:pb-[21px] mq675:box-border">
              <div className="w-64 items-end justify-end py-0 px-3 box-border mb-4">
                <div className="cursor-pointer py-2 px-4 bg-white rounded-xl shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.25)] border-gray-200 hover:bg-gainsboro hover:box-border hover:border-[0.5px] hover:border-solid hover:border-darkslategray ">
                  <div className="relative text-sm font-semibold font-poppins text-orange text-right">
                    Normal | 20 mins
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-center gap-[26px] mq450:flex-wrap">
                  <div className="rounded-xl bg-black flex flex-col items-center justify-center py-[15px] px-2">
                    <div className="flex flex-row items-center justify-center py-0 px-3">
                      <h3 className="m-0 h-[27px] relative text-inherit font-semibold font-inherit flex items-center">
                        Calories
                      </h3>
                    </div>
                    <div className="flex flex-row items-center justify-center py-0 px-3 text-base text-white">
                      <div className="h-6 relative font-semibold flex items-center">
                        600 kcal
                      </div>
                    </div>
                  </div>
                  <div className="w-[113px] rounded-xl bg-black flex flex-col items-center justify-center py-[15px] px-3 box-border">
                    <div className="flex flex-row items-center justify-center py-0 px-[18px]">
                      <h3 className="m-0 h-[27px] relative text-inherit font-semibold font-inherit flex items-center">
                        Carbs
                      </h3>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-6 text-base text-white">
                      <div className="relative font-semibold">120 g</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[26px] mq450:flex-wrap">
                  <div className="rounded-xl bg-black flex flex-col items-center justify-center py-[15px] px-3">
                    <div className="flex flex-row items-center justify-center py-0 px-3.5">
                      <h3 className="m-0 h-[27px] relative text-inherit font-semibold font-inherit flex items-center">
                        Protein
                      </h3>
                    </div>
                    <div className="flex flex-row items-center justify-center py-0 px-[27px] text-base text-white">
                      <div className="relative font-semibold">30 g</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-black flex flex-col items-center justify-center py-[15px] px-3">
                    <div className="flex flex-row items-center justify-center py-0 px-[33px]">
                      <h3 className="m-0 h-[27px] relative text-inherit font-semibold font-inherit flex items-center">
                        Fat
                      </h3>
                    </div>
                    <div className="flex flex-row items-center justify-center py-0 px-[29px] text-base text-white">
                      <div className="relative font-semibold">10 g</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[5px] text-sm text-black px-4">
                <div className="self-stretch flex flex-row items-end justify-start py-[15px] px-0 [row-gap:20px] text-left text-lg text-white mq450:flex-wrap">
                  <div className="flex-1 flex flex-row items-center justify-start min-w-[166px]">
                    <h3 className="m-0 relative text-inherit font-bold font-inherit">
                      Add To Food Diary
                    </h3>
                  </div>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label=""
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start min-w-[116px]">
                      <div className="relative font-semibold">Calories</div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-end min-w-[116px] text-xs">
                      <div className="flex flex-col items-start justify-start py-0 px-0">
                        <div className="relative font-semibold">
                          1500 / 2000 kcal
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[5px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded bg-gray-300 w-full h-full" />
                    <img
                      className="absolute top-[0px] right-[100.7px] rounded w-[255.3px] h-[5px] z-[1]"
                      loading="eager"
                      alt=""
                      src="/rectangle-169.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-end text-xs text-white">
                    <div className="relative font-semibold">75%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start min-w-[116px]">
                      <div className="h-[21px] relative font-semibold flex items-center">
                        Carbs
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-end min-w-[116px] text-xs">
                      <div className="flex flex-col items-start justify-start py-0 px-0">
                        <div className="relative font-semibold">
                          100 / 380 g
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[5px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded bg-gray-300 w-full h-full" />
                    <img
                      className="absolute top-[0px] right-[100.7px] rounded w-[255.3px] h-[5px] z-[1]"
                      loading="eager"
                      alt=""
                      src="/rectangle-169.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-end text-xs text-white">
                    <div className="relative font-semibold">26%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start min-w-[116px]">
                      <div className="relative font-semibold">Protein</div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-end min-w-[116px] text-xs">
                      <div className="relative font-semibold">50 / 80g</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[5px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded bg-gray-300 w-full h-full" />
                    <img
                      className="absolute top-[0px] right-[100.7px] rounded w-[255.3px] h-[5px] z-[1]"
                      loading="eager"
                      alt=""
                      src="/rectangle-169.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-end text-xs text-white">
                    <div className="relative font-semibold">63%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start min-w-[116px]">
                      <div className="h-[21px] relative font-semibold flex items-center">
                        Fat
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-end min-w-[116px] text-xs">
                      <div className="relative font-semibold">50 / 80 g</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[5px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded bg-gray-300 w-full h-full" />
                    <img
                      className="absolute top-[0px] right-[100.7px] rounded w-[255.3px] h-[5px] z-[1]"
                      loading="eager"
                      alt=""
                      src="/rectangle-169.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-end text-xs text-white">
                    <div className="relative font-semibold">63%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeProfileA;
