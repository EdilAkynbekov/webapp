import React from "react";
import UnstylesButton from "./UnstylesButton";
import Image from "next/image";
import styles from "../../styles/components/Common.module.scss";
interface IProps {
  children: React.ReactNode;
  src: any;
  style?: React.CSSProperties;
}

const BTNImage = ({ children, src, style }: IProps) => {
  return (
    <UnstylesButton style={style}>
      <div className={styles.btnImage}>
        <Image src={src} height={26} width={26} alt="icon" />
        {children}
      </div>
    </UnstylesButton>
  );
};

export default BTNImage;
