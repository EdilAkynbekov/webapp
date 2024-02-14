import type { NextPage } from "next";
import { useCallback } from "react";

const TabletPanel: NextPage = () => {
  const onRightMenuItemContainer6Click = useCallback(() => {
    // Please sync "recipe_a" to the project
  }, []);

  return (
    <div className="flex flex-col items-start justify-start max-w-full max-h-full overflow-auto text-center text-xs text-black1 font-poppins">
      <div className="w-[220px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-white h-[1133px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[38px]">
        <div className="self-stretch h-[150px] flex flex-row items-center justify-start py-0 px-2.5 box-border gap-[10px]">
          <img className="w-[30px] relative h-[30px]" alt="" src="/menu.svg" />
          <img
            className="self-stretch w-[140px] relative rounded-11xl max-h-full object-cover hidden"
            alt=""
            src="/frame-1000002377-1@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch rounded-8xs h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/menu-icon@2x.png"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Dashboard</div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/menu-icon-1@2x.png"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Nutrition Tracker</div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/menu-icon-2.svg"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Profile</div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/menu-icon-3@2x.png"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Appointments</div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/menu-icon-4.svg"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Consultation Notes</div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/menu-icon-5@2x.png"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Dietitian Network</div>
            </div>
          </div>
          <div
            className="self-stretch rounded-8xs bg-black1 h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px] cursor-pointer text-white"
            onClick={onRightMenuItemContainer6Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/menu-icon-6.svg"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Recipes</div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs h-10 flex flex-row items-center justify-start py-0 pr-0 pl-2.5 box-border gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/menu-icon-7@2x.png"
            />
            <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Shopping List</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-end justify-start py-5 px-2.5">
          <div className="w-[117px] flex flex-row items-center justify-start gap-[5px]">
            <img
              className="w-6 relative h-6"
              alt=""
              src="/sign-out-squre.svg"
            />
            <div className="rounded-8xs flex flex-row items-center justify-center p-[5px]">
              <div className="relative font-semibold">Sign out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletPanel;
