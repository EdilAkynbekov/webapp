import React, { useState } from "react";
const NextButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };
  return (
    <button
      className={`cursor-pointer p-1.5 bg-orange flex-1 rounded-xl shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center hover:bg-slate-300`}
      onClick={handleClick}
    >
      <b
        className={`h-[27px] relative text-lg flex font-poppins ${
          isPressed ? "text-orange" : "text-white"
        } text-center items-center justify-center`}
      >
        Next
      </b>
    </button>
  );
};

export default NextButton;
