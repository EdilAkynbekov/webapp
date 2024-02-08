import React from "react";

const Popup = () => {
  return (
    <div
      className="relative z-10 max-w-[100vw]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Adjusted class here for max-w-[270px] without breakpoint prefix */}
          <div className="relative mx-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all max-w-[270px] my-8 w-full">
            <div className="bg-white mx-4 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  {/* SVG and content remain unchanged */}
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  {/* Title and message remain unchanged */}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {/* Buttons remain unchanged */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
