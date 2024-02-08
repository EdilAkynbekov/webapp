import type { NextPage } from "next";
import ProfileSetup7 from "../components/FrameSetup7";
import ProgressBar from "../components/common/ProgressBar2";

const Setup7a: NextPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-saddlebrown flex flex-col items-center justify-center py-[40px] px-[20px] md:px-[50px] md:py-[50px] lg:py-[0px] lg:px-[120px] xl:py-[0px] xl:px-[170px] box-border">
      <ProgressBar
        steps={8}
        currentStep={6}
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
      <ProfileSetup7 />
      <ProgressBar
        steps={8}
        currentStep={6}
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
        className="hidden lg:block mb-4 lg:mb-8"
      />
    </div>
  );
};

export default Setup7a;
