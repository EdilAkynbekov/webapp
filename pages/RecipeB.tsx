import type { NextPage } from "next";
import IngredientsList from "../components/recipe/recipe-ingredients";
import RightPanel from "../components/recipe/right-panel";

const RecipeIngredientA: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-orange overflow-y-auto flex flex-row items-center justify-start py-0 pr-10 pl-0 box-border gap-[40px] tracking-[normal] text-center text-xs text-black font-poppins mq675:gap-[40px] mq750:pl-5 mq750:box-border">
      <RightPanel />
      <section className="flex-1 flex flex-col items-start justify-start py-10 px-0 box-border gap-[30px] max-w-[calc(100%_-_260px)] text-left text-[64px] text-white font-poppins mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq750:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[45px] max-w-full mq450:gap-[45px]">
          <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border min-w-[216px] max-w-full">
            <h1 className="m-0 w-[216px] relative text-inherit tracking-[-0.02em] leading-[18.07px] font-bold font-inherit flex items-center mq750:text-[51px] mq750:leading-[14px] mq450:text-[38px] mq450:leading-[11px]">
              Recipe
            </h1>
          </div>
          <div className="w-[279px] flex flex-row items-end justify-center gap-[45px] mq450:gap-[45px]">
            <button className="cursor-pointer [border:none] py-1 px-[18px] bg-black hover:bg-white rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center hover:bg-darkslategray-200">
              <b className="h-[27px] relative text-lg flex font-poppins text-orange text-center items-center justify-center">
                Previous
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-1 px-[18px] bg-black hover:bg-white flex-1 rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center hover:bg-darkslategray-200">
              <b className="h-[27px] relative text-lg flex font-poppins text-orange text-center items-center justify-center">
                Next
              </b>
            </button>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-white overflow-y-auto flex flex-row items-start justify-center py-[30px] px-[39px] box-border gap-[20px] max-w-full text-lg text-black mq750:pt-5 mq750:pb-5 mq750:box-border">
          <div className="h-[603px] w-48 rounded-xl flex flex-col items-center justify-start py-0 pr-2.5 pl-0 box-border gap-[30px] mq675:hidden">
            <div className="self-stretch flex flex-col items-start justify-center gap-[22px]">
              <div className="self-stretch flex flex-row items-start justify-center">
                <b className="flex-1 relative tracking-[-0.02em] leading-[30px]">
                  Serving Size:
                </b>
              </div>
              <div className="self-stretch rounded-[10px] bg-black flex flex-row items-center justify-between py-2.5 px-5 gap-[20px] text-[20px] text-white font-inter">
                <img
                  className="h-[30px] w-[30px] cursor-pointer relative rounded-6xs min-h-[30px]"
                  alt=""
                  src="/Frame 37.svg"
                />
                <b className="relative mq450:text-[16px]">1</b>
                <img
                  className="h-[30px] w-[30px] cursor-pointer relative rounded-6xs min-h-[30px]"
                  loading="eager"
                  alt=""
                  src="/Frame 38.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="h-[27px] flex-1 relative inline-block">
                  You Need:
                </b>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                <button className="cursor-pointer [border:none] py-0 px-2.5 bg-orange self-stretch rounded-xl flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="relative text-xs font-semibold font-poppins text-black text-center">
                      Blender
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-2.5 bg-orange self-stretch rounded-xl flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="relative text-xs font-semibold font-poppins text-black text-center">
                      Pan
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-2.5 bg-orange self-stretch rounded-xl flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="relative text-xs font-semibold font-poppins text-black text-center">
                      Oven
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[5px] max-w-[calc(100%_-_212px)] mq675:max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <b className="relative">Ingredients</b>
              <div className="flex flex-row items-center justify-end text-3xs">
                <div className="relative cursor-pointer font-semibold">
                  + Add to Shopping List
                </div>
              </div>
            </div>
            <IngredientsList
              vector193="/vector-193.svg"
              showRecipeItem
              recipeItemVisible
            />
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
              <b className="relative">Seasonings</b>
              <div className="flex flex-row items-center justify-end text-3xs">
                <div className="relative cursor-pointer font-semibold">
                  + Add to Shopping List
                </div>
              </div>
            </div>
            <IngredientsList
              vector193="/vector-195.svg"
              showRecipeItem={false}
              recipeItemVisible={false}
              propBackgroundColor="#33363f"
              propMinHeight="215px"
              propColor="#ffb527"
              propColor1="#ffb527"
              propColor2="#ffb527"
              propColor3="#ffb527"
              propColor4="#ffb527"
              propColor5="#ffb527"
              propColor6="#ffb527"
              propColor7="#ffb527"
              propGap="15px"
              propMinWidth="94px"
              propColor8="#808080"
              propFlex="1"
              propMinWidth1="94px"
              propColor9="#808080"
              propDisplay="flex"
              propHeight="21px"
              propHeight1="170px"
              propColor10="#ffb527"
              propColor11="#ffb527"
              propColor12="#ffb527"
              propColor13="#ffb527"
              propColor14="#ffb527"
              propColor15="#ffb527"
              propColor16="#ffb527"
              propColor17="#ffb527"
              propGap1="15px"
              propMinWidth2="94px"
              propColor18="#808080"
              propFlex1="1"
              propMinWidth3="94px"
              propColor19="#808080"
              propDisplay1="flex"
              propHeight2="21px"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeIngredientA;
