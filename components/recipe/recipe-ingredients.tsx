import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type IngredientsListType = {
  vector193?: string;
  showRecipeItem?: boolean;
  recipeItemVisible?: boolean;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinHeight?: CSSProperties["minHeight"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];
  propColor7?: CSSProperties["color"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor8?: CSSProperties["color"];
  propFlex?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor9?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propColor10?: CSSProperties["color"];
  propColor11?: CSSProperties["color"];
  propColor12?: CSSProperties["color"];
  propColor13?: CSSProperties["color"];
  propColor14?: CSSProperties["color"];
  propColor15?: CSSProperties["color"];
  propColor16?: CSSProperties["color"];
  propColor17?: CSSProperties["color"];
  propGap1?: CSSProperties["gap"];
  propMinWidth2?: CSSProperties["minWidth"];
  propColor18?: CSSProperties["color"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth3?: CSSProperties["minWidth"];
  propColor19?: CSSProperties["color"];
  propDisplay1?: CSSProperties["display"];
  propHeight2?: CSSProperties["height"];
};

const IngredientsList: NextPage<IngredientsListType> = ({
  vector193,
  showRecipeItem,
  recipeItemVisible,
  propBackgroundColor,
  propMinHeight,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propGap,
  propMinWidth,
  propColor8,
  propFlex,
  propMinWidth1,
  propColor9,
  propDisplay,
  propHeight,
  propHeight1,
  propColor10,
  propColor11,
  propColor12,
  propColor13,
  propColor14,
  propColor15,
  propColor16,
  propColor17,
  propGap1,
  propMinWidth2,
  propColor18,
  propFlex1,
  propMinWidth3,
  propColor19,
  propDisplay1,
  propHeight2,
}) => {
  const ingredientsListStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const recipeitemFrameNStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const amountStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const recipeTextStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const amount1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const recipeText1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const amount2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const recipeText2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const amount3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const recipeItemStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const recipeText3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const recipeText4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  const recipeAmountStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propMinWidth1]);

  const amount4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor9,
      display: propDisplay,
      height: propHeight,
    };
  }, [propColor9, propDisplay, propHeight]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const recipeitemnameStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor10,
    };
  }, [propColor10]);

  const amount5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor11,
    };
  }, [propColor11]);

  const shoppinglisticonStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor12,
    };
  }, [propColor12]);

  const amount6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor13,
    };
  }, [propColor13]);

  const recipeitemdetailStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor14,
    };
  }, [propColor14]);

  const amount7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor15,
    };
  }, [propColor15]);

  const recipeText5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor16,
    };
  }, [propColor16]);

  const amount8Style: CSSProperties = useMemo(() => {
    return {
      color: propColor17,
    };
  }, [propColor17]);

  const recipeItem1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const recipeText6Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const recipeText7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor18,
    };
  }, [propColor18]);

  const recipeAmount1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth3,
    };
  }, [propFlex1, propMinWidth3]);

  const amount9Style: CSSProperties = useMemo(() => {
    return {
      color: propColor19,
      display: propDisplay1,
      height: propHeight2,
    };
  }, [propColor19, propDisplay1, propHeight2]);

  return (
    <div
      className="self-stretch rounded-8xs bg-[#808080] flex flex-row flex-wrap items-center justify-center py-[5px] px-1 gap-[10px] text-left text-sm text-white font-poppins"
      style={ingredientsListStyle}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[185px]"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[142px]">
            <div
              className="flex-1 relative font-semibold"
              style={recipeitemFrameNStyle}
            >{`Extra Virgin Olive Oil `}</div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-1.5 text-right">
            <div className="relative font-semibold" style={amountStyle}>
              2 tbsp
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[133px]">
            <div
              className="flex-1 relative font-semibold"
              style={recipeTextStyle}
            >
              Garlic
            </div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-1.5 text-right">
            <div
              className="h-[21px] relative font-semibold flex items-center"
              style={amount1Style}
            >
              2 cloves
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[147px]">
            <div
              className="h-[21px] flex-1 relative font-semibold flex items-center"
              style={recipeText1Style}
            >
              Beetroot
            </div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-1.5 text-right">
            <div className="relative font-semibold" style={amount2Style}>
              100 g
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[151px]">
            <div
              className="flex-1 relative font-semibold"
              style={recipeText2Style}
            >
              Tofu
            </div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-1.5 text-right">
            <div className="relative font-semibold" style={amount3Style}>
              20 g
            </div>
          </div>
        </div>
        {showRecipeItem && (
          <div
            className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap"
            style={recipeItemStyle}
          >
            <div
              className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[149px]"
              style={recipeText3Style}
            >
              <div
                className="h-[21px] flex-1 relative font-semibold flex items-center"
                style={recipeText4Style}
              >
                Pasta
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-end p-2.5 text-right"
              style={recipeAmountStyle}
            >
              <div className="relative font-semibold" style={amount4Style}>
                120g
              </div>
            </div>
          </div>
        )}
      </div>
      <img
        className="h-[250px] w-0.5 relative"
        loading="eager"
        alt=""
        src={vector193}
        style={vectorIconStyle}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[185px]">
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[142px]">
            <div
              className="flex-1 relative font-semibold"
              style={recipeitemnameStyle}
            >{`Extra Virgin Olive Oil `}</div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-[7px] text-right">
            <div className="relative font-semibold" style={amount5Style}>
              2 tbsp
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[133px]">
            <div
              className="flex-1 relative font-semibold"
              style={shoppinglisticonStyle}
            >
              Garlic
            </div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-[7px] text-right">
            <div
              className="h-[21px] relative font-semibold flex items-center"
              style={amount6Style}
            >
              2 cloves
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[147px]">
            <div
              className="h-[21px] flex-1 relative font-semibold flex items-center"
              style={recipeitemdetailStyle}
            >
              Beetroot
            </div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-[7px] text-right">
            <div className="relative font-semibold" style={amount7Style}>
              100 g
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[151px]">
            <div
              className="flex-1 relative font-semibold"
              style={recipeText5Style}
            >
              Tofu
            </div>
          </div>
          <div className="flex flex-row items-center justify-end py-2.5 pr-2.5 pl-[7px] text-right">
            <div className="relative font-semibold" style={amount8Style}>
              20 g
            </div>
          </div>
        </div>
        {recipeItemVisible && (
          <div
            className="self-stretch flex flex-row items-center justify-center gap-[2px] mq450:flex-wrap"
            style={recipeItem1Style}
          >
            <div
              className="flex-1 flex flex-row items-center justify-start p-2.5 box-border min-w-[149px]"
              style={recipeText6Style}
            >
              <div
                className="h-[21px] flex-1 relative font-semibold flex items-center"
                style={recipeText7Style}
              >
                Pasta
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-end p-2.5 text-right"
              style={recipeAmount1Style}
            >
              <div className="relative font-semibold" style={amount9Style}>
                120g
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientsList;
