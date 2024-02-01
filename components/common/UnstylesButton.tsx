import React from "react";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const UnstylesButton = ({ children, style }: IProps) => {
  return (
    <button className="unstyled-btn" style={style}>
      {children}
    </button>
  );
};

export default UnstylesButton;
