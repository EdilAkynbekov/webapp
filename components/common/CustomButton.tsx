import React from "react";
import styles from "../../styles/components/Common.module.scss";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary";
}

const CustomButton = (props: IProps) => {
  const { children, style, variant = "primary" } = props;
  return (
    <button
      style={style}
      className={
        variant === "primary"
          ? styles.customBtnPrimary
          : styles.customBtnSecondary
      }
    >
      {children}
    </button>
  );
};

export default CustomButton;
