import React from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
const ProgressBar = () => {
  const router = useRouter();

  const onSignOutClick = useCallback(() => {
    // Please sync "Setup_3a" to the project
  }, []);

  const onEllipseClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onEllipse1Click = useCallback(() => {
    router.push("/setup2a");
  }, [router]);

  const onEllipse2Click = useCallback(() => {
    // Please sync "Setup_3a" to the project
  }, []);
  return (
    <nav className="pt-20 w-[480px] relative h-5">
      <div className="absolute h-[30%] w-full top-[35%] right-[0%] bottom-[35%] left-[0%] flex flex-row items-center justify-center">
        <div className="flex-1 relative rounded-xl bg-orange h-1.5" />
        <div className="flex-1 relative rounded-xl bg-orange h-1.5" />
        <div className="flex-1 relative rounded-xl bg-orange h-1.5" />
        <div className="flex-1 relative rounded-xl bg-silver h-1.5" />
        <div className="flex-1 relative rounded-xl bg-silver h-1.5" />
        <div className="flex-1 relative rounded-xl bg-silver h-1.5" />
        <div className="flex-1 relative rounded-xl bg-silver h-1.5" />
      </div>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-between">
        <div
          className="w-5 relative rounded-[50%] bg-orange h-5 cursor-pointer"
          onClick={onEllipseClick}
        />
        <div
          className="w-5 relative rounded-[50%] bg-orange h-5 cursor-pointer"
          onClick={onEllipse1Click}
        />
        <div
          className="w-5 relative rounded-[50%] bg-orange h-5 cursor-pointer"
          onClick={onEllipse2Click}
        />
        <div className="w-5 relative rounded-[50%] bg-orange h-5" />
        <div className="w-5 relative rounded-[50%] bg-silver h-5" />
        <div className="w-5 relative rounded-[50%] bg-silver h-5" />
        <div className="w-5 relative rounded-[50%] bg-silver h-5" />
        <div className="w-5 relative rounded-[50%] bg-silver h-5" />
      </div>
    </nav>
  );
};

export default ProgressBar;
