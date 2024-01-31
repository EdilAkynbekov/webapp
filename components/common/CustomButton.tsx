import React from "react";
import styles from "../../styles/components/Common.module.scss";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomButton = (props: IProps) => {
  const { children, style } = props;
  return (
    <button style={style} className={styles.customBtn}>
      {children}
    </button>
  );
};

export default CustomButton;
