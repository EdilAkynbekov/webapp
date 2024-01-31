import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
const PrettoSlider = styled(Slider)({
  color: "orange",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "orange",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
const marks = [
  {
    value: 50,
    label: "50 KG",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const FrameGroup: NextPage = () => {
  const router = useRouter();

  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[34px] max-w-full text-center text-lg text-black font-poppins md:gap-[17px] ">
      <div className="w-[791px] flex flex-col items-start justify-start gap-[26px] lg:min-h-[150px] max-w-full text-left pl-8 md:pl-16 lg:pl-24">
        <div className="flex flex-row items-center justify-center">
          <Link href="/Prsetup2a" className="no-underline">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10">
              <img
                className="relative w-[33.2px] h-[33.3px]"
                alt=""
                src="/subtract.svg"
              />
            </button>
          </Link>
        </div>
        <div className="self-stretch h-5 relative font-semibold flex items-center shrink-0">
          What is your goal?
        </div>
      </div>
      <div className="w-[651px] flex items-center justify-center text-sm max-w-[320px] md:max-w-full mb-20 md:mb-12 lg:mb-20">
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
          marks={marks}
          className=""
        />
      </div>
      <div className="self-stretch h-[142px] flex flex-col items-center justify-center py-0 px-5 box-border max-w-full text-xs text-white mb-10 lg:min-h-[200px]">
        <div className="w-[651px] flex flex-col items-center justify-center gap-[12px] max-w-full shrink-3">
          <div className="self-stretch relative text-black flex items-center justify-between mb-4 lg:mb-12 lg:text-base">
            <p className="m-0">Weight Loss</p>
            <p className="m-0">Weight Maintenance</p>
            <p className="m-0"> Weight Gain</p>
          </div>
          <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-center justify-center py-5 px-[30px] box-border max-w-full">
            <div className="flex-1 relative inline-block max-w-full lg:text-base">
              <p className="m-0">
                <span className="font-poppins text-white">
                  According to the BMI scale, your healthy weight range is
                  between
                </span>
                <b className="font-poppins text-orange"> xx - xx kg</b>
                <span>
                  <span>. </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span>{`Please keep in mind that BMI is `}</span>
                  <b className="font-poppins">NOT</b>
                  <span>
                    {" "}
                    an accurate measurement for body fat content as BMI does not
                    account for
                  </span>
                  <b className="font-poppins">muscle mass</b>
                  <span className="font-poppins"> and </span>
                  <b className="font-poppins">bone density.</b>
                </span>
              </p>
            </div>
          </div>
          <div className="self-stretch relative text-black mb-20 lg:text-base">
            <p className="m-0">
              We suggest consulting a medical professional for a more accurate
              estimation.
            </p>
            <p className="m-0">
              After setting up your profile, you can easily access our network
              of dietitians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameGroup;
