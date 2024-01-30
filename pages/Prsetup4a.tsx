import type { NextPage } from "next";
import ChoiceFrame from "../components/FrameSetup4";

const Setup4a: NextPage = () => {
  return (
    <div className="w-full relative bg-saddlebrown flex flex-row items-center justify-center py-[40px] px-[20px] md:px-[50px] md:py-[50px] lg:py-[100px] lg:px-[120px] xl:py-[150px] xl:px-[170px] box-border">
      <ChoiceFrame />
    </div>
  );
};

export default Setup4a;
