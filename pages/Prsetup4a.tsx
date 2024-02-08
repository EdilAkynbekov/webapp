import type { NextPage } from "next";
import ChoiceFrame from "../components/FrameSetup4a";
import ProgressBar from "../components/common/ProgressBar2";

const Setup4a: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-saddlebrown flex flex-col items-center justify-center py-[40px] px-[20px] md:px-[50px] md:py-[50px] lg:py-[0px] lg:px-[120px] xl:py-[0px] xl:px-[170px] box-border">
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
        className="md:hidden"
      />
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
        className="hidden lg:block"
      />
    </div>
  );
};

export default Setup4a;
