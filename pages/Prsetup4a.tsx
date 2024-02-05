import type { NextPage } from "next";
import ChoiceFrame from "../components/FrameSetup4a";
import ProgressBar from "../components/common/ProgressBar2";

const Setup4a: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-saddlebrown flex flex-row items-center justify-center py-[40px] px-[30px] md:px-[50px] md:py-[50px] lg:py-[0px] lg:px-[120px] xl:py-[0px] xl:px-[170px] box-border">
      <ChoiceFrame />
      <ProgressBar
        steps={8}
        currentStep={3}
        navigationRoutes={[
          "Prsetup1a",
          "Prsetup2a",
          "Prsetup3",
          "Prsetup4a",
          "Prsetup5a",
          "Prsetup6a",
          "Prsetup7a",
          "Prsetup8a",
        ]}
        className="bottom-[95%] lg:top-[94%] xl:top-[91%]"
      />
    </div>
  );
};

export default Setup4a;
