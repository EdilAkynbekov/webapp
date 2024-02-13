import type { NextPage } from "next";

const RightPanel: NextPage = () => {
  return (
    <div className="min-h-screen w-[220px] rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none bg-white overflow-hidden shrink-0 flex-col items-start justify-start py-0 px-2.5 box-border gap-[10px] text-center text-xs text-black font-poppins mq975:hidden">
      <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
        <img
          className="h-[30px] w-[30px] relative hidden"
          alt=""
          src="../../public/vercel.svg"
        />
        <img
          className="h-[150px] w-[140px] relative rounded-11xl object-cover"
          loading="eager"
          alt=""
          src="/menu.svg"
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/menu_icon.svg"
          />
          <button className="flex flex-row items-center justify-center py-[5px] px-2.5 font-semibold bg-white cursor-pointer">
            Dashboard
          </button>
        </div>
        <div className="flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-[38px] pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/menu_icon1.svg"
          />
          <div className="flex flex-row items-center justify-center py-[5px] pl-1">
            <button className="relative font-semibold bg-white cursor-pointer">
              Nutrition Tracker
            </button>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-8xs flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/menu_icon3.svg"
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
            src="/menu_icon4.svg"
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
            src="/menu_icon (1).svg"
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
            src="/menu_icon (2).svg"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2">
            <div className="relative font-semibold">Dietitian Network</div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-8xs bg-black flex flex-row items-center justify-start py-0 pr-0 pl-2.5 gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/menu_icon (3).svg"
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
            src="/menu_icon (4).svg"
          />
          <div className="flex flex-row items-center justify-center py-[5px] px-2">
            <div className="relative font-semibold">Shopping List</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[470px] flex flex-row items-end justify-start py-5 px-2.5 box-border flex-[0.8529] text-gray-100">
        <div className="flex flex-row items-center justify-start py-0 pr-7 pl-0 gap-[5px]">
          <img
            className="h-24 w-24 relative"
            loading="eager"
            alt=""
            src="/sign_out.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
