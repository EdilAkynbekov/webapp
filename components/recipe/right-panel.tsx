import type { NextPage } from "next";

const RightPanel: NextPage = () => {
  return (
    <div className="h-[832px] w-[220px] rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[10px] text-center text-xs text-black font-poppins mq750:hidden">
      <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
        <img
          className="h-[30px] w-[30px] relative hidden"
          alt=""
          src="C:\Projects\webapp\public\menu.svg"
        />
        <img
          className="h-[150px] w-[140px] relative rounded-11xl object-cover"
          loading="eager"
          alt=""
          src="/frame-1000002377-1@2x.png"
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/menu-icon1@2x.png"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
            <div className="relative font-semibold">Dashboard</div>
          </div>
        </div>
        <div className="flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-[38px] pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/menu-icon-11@2x.png"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2">
            <div className="relative font-semibold">Nutrition Tracker</div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/menu-icon-2.svg"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
            <div className="relative font-semibold">Profile</div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/menu-icon-31@2x.png"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2.5">
            <div className="relative font-semibold">Appointments</div>
          </div>
        </div>
        <div className="flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-6 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/menu-icon-4.svg"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2">
            <div className="relative font-semibold">Consultation Notes</div>
          </div>
        </div>
        <div className="flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-9 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/menu-icon-51@2x.png"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2">
            <div className="relative font-semibold">Dietitian Network</div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-8xs bg-black flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/menu-icon-61.svg"
          />
          <input
            className="w-[68px] [border:none] [outline:none] bg-[transparent] h-7 flex flex-row items-center justify-center py-[5px] px-2.5 box-border font-poppins font-semibold text-xs text-white"
            placeholder="Recipes"
            type="text"
          />
        </div>
        <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/menu-icon-71@2x.png"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2">
            <div className="relative font-semibold">Shopping List</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[272px] flex flex-row items-end justify-start py-5 px-2.5 box-border flex-[0.8529] text-gray-100">
        <div className="flex flex-row items-center justify-start py-0 pr-7 pl-0 gap-[5px]">
          <img
            className="h-6 w-6 relative"
            loading="eager"
            alt=""
            src="/sign-out-squre.svg"
          />
          <div className="rounded-8xs flex flex-row items-center justify-center py-[5px] px-[3px]">
            <div className="relative font-semibold">Sign out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
