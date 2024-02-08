import React from "react";
import { useRouter } from "next/router";

interface ProgressBarProps {
  steps: number;
  currentStep: number;
  navigationRoutes: string[];
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  currentStep,
  navigationRoutes,
  className = "",
}) => {
  const router = useRouter();

  const navigate = (route: string, index: number) => {
    if (index <= currentStep) {
      router.push(route);
    }
  };

  const navClasses = `w-[280px] md:w-[0px] lg:w-[480px] relative h-5 ${className}`;

  return (
    <nav className={navClasses}>
      <div className="absolute h-[30%] w-full top-[35%] right-[0%] bottom-[35%] left-[0%] flex flex-row items-center justify-center gap-0">
        {Array.from({ length: steps - 1 }).map((_, index) => (
          <div
            key={index}
            className={`flex-grow h-1.5 ${
              index < currentStep ? "bg-orange" : "bg-[#C4C4C4]"
            }`}
          />
        ))}
      </div>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-between">
        {navigationRoutes.map((route, index) => (
          <div
            key={index}
            className={`w-5 relative rounded-[50%] h-5 cursor-pointer ${
              index <= currentStep ? "bg-orange" : "bg-[#C4C4C4]"
            }`}
            onClick={() => navigate(route, index)}
            style={{ pointerEvents: index > currentStep ? "none" : "auto" }}
          />
        ))}
      </div>
    </nav>
  );
};

export default ProgressBar;
