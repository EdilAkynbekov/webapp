import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FrameComponentType = {
  label?: string;
  enterInputPlaceholder?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propColor?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  label,
  enterInputPlaceholder,
  propHeight,
  propDisplay,
  propColor,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const infoTextStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start p-[5px] box-border gap-[3px] max-w-full text-left text-lg text-orange font-poppins">
      <div
        className="self-stretch h-[27px] relative font-semibold flex items-center"
        style={labelStyle}
      >
        {label}
      </div>
      <div className="self-stretch rounded-8xs box-border flex flex-row items-center justify-start py-2.5 pr-[11px] pl-[9px] max-w-full border-[1px] border-solid border-gray">
        <input
          className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 flex-1 relative text-gray text-left flex items-center min-w-[195px] max-w-full"
          placeholder={enterInputPlaceholder}
          type="text"
        />
      </div>
      <div
        className="self-stretch h-[21px] relative text-sm text-black flex items-center"
        style={infoTextStyle}
      />
    </div>
  );
};

export default FrameComponent;
