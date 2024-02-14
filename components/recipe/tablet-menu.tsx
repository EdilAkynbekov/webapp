import type { NextPage } from "next";
import { useState, useCallback } from "react";
import TabletPanel from "./tablet-panel";
import PortalPopup from "./portal-popup";

const TabletMenu: NextPage = () => {
  const [isTabletPanelOpen, setTabletPanelOpen] = useState(false);

  const openTabletPanel = useCallback(() => {
    setTabletPanelOpen(true);
  }, []);

  const closeTabletPanel = useCallback(() => {
    setTabletPanelOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex-1 flex flex-row items-center justify-between py-0 px-5">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] relative h-[30px]"
          onClick={openTabletPanel}
        >
          <img
            className="absolute h-[6.67%] w-[58.33%] top-[29.33%] right-[20.67%] bottom-[64%] left-[21%] rounded-sm max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-7.svg"
          />
          <img
            className="absolute h-[6.67%] w-[58.33%] top-[50%] right-[20.67%] bottom-[43.33%] left-[21%] rounded-sm max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-8.svg"
          />
          <img
            className="absolute h-[6.67%] w-[58.33%] top-[71%] right-[20.67%] bottom-[22.33%] left-[21%] rounded-sm max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-9.svg"
          />
        </button>
        <img
          className="self-stretch w-[140px] relative rounded-11xl max-h-full object-cover"
          alt=""
          src="/frame-1000002377-1@2x.png"
        />
      </div>
      {isTabletPanelOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTabletPanel}
        >
          <TabletPanel />
        </PortalPopup>
      )}
    </>
  );
};

export default TabletMenu;
