import type { NextPage } from "next";
import RightPanel from "../components/recipe/right-panel";
import RecipeCard from "../components/recipe/recipe-card";
// Assuming other imports are used elsewhere or in future expansions of the component.

const RecipeA: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative  bg-orange overflow-hidden flex flex-row items-start justify-center py-0 pr-0 lg:pr-10 pl-0 box-border gap-0 lg:gap-[40px] tracking-[normal] mq750:pl-5 mq750:box-border mq675:gap-[40px]">
      <RightPanel />
      <section className="flex-1 max-h-full flex flex-col items-center justify-start py-10 pl-[260px] box-border gap-[28px] text-left text-45xl text-white font-poppins mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq750:max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-end justify-start max-w-full shrink-0 mq450:gap-[45px]">
          {/* Title and possibly other elements */}
          <h1 className="m-0 w-[216px] relative text-xxl tracking-[-0.02em] leading-[18.07px] font-bold font-inherit flex items-center mq750:text-[51px] mq750:leading-[14px] mq450:text-[38px] mq450:leading-[11px]">
            Recipe
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[25px] shrink-0 text-[20px] text-black">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[18.07px] font-semibold font-inherit mq450:text-[19px] mq450:leading-[14px]">
            Your Weekly Dinner Recommendation
          </h1>
        </div>
        {/* Cards Container */}
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-5 px-5 pb-[50px] box-border gap-[64px] mq450:gap-[64px] mq450:pb-8 mq450:box-border mq675:gap-[64px]">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          {/* More <RecipeCard /> as needed */}
        </div>
      </section>
    </div>
  );
};

export default RecipeA;
