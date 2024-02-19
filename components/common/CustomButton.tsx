import React from "react";
import styles from "../../styles/components/Common.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "filled";
}

const CustomButton = (props: IProps) => {
  const {
    children,
    style,
    variant = "primary",
    disabled = false,
    ...btnProps
  } = props;
  const getStyle = (stlye: "primary" | "secondary" | "filled") => {
    switch (stlye) {
      case "primary":
        return styles.customBtnPrimary;
      case "secondary":
        return styles.customBtnSecondary;
      case "filled":
        return styles.customBtnFilled;
    }
  };

  return (
    <button
      {...btnProps}
      disabled={disabled}
      style={style}
      className={`${getStyle(variant)} ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
