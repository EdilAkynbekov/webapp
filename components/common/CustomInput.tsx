import React from "react";
import { Input, InputProps } from "@mui/material";
import { BodyText } from "../typography";

interface IProps extends InputProps {
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
}

const CustomInput = (props: IProps) => {
  const { style, label,inputStyle, ...inputProps } = props;
  return (
    <div style={style}>
      {label && (
        <BodyText size="lg" fontWeight="700" color="#FFB527">
          {label}
        </BodyText>
      )}
      <Input {...inputProps} style={inputStyle} />
    </div>
  );
};

export default CustomInput;
