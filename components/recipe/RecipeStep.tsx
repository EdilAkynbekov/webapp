import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { BodyText } from "../typography";
import React from "react";

interface IProps {
  step: number;
  imgSrc: StaticImageData;
  description: string;
}
const RecipeStep = (props: IProps) => {
  const { step, imgSrc, description } = props;
  const isTablet = useMediaQuery("(max-width: 1100px)");
  function addEmptyLine(str: string) {
    var sentences = str.split(".");

    var result = sentences.join(".\n\n");
    console.log(result);
    return result;
  }
  return (
    <Box>
      <Box
        borderRadius={"50%"}
        width={"50px"}
        height={"50px"}
        bgcolor={"#FFB527"}
        color={"white"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"30px"}
        fontWeight={"700"}
        mb={"10px"}
      >
        {step}
      </Box>
      <Image
        src={imgSrc}
        width={isTablet ? 282 : 385}
        height={isTablet ? 162 : 220}
        alt={`Image step ${step}`}
      />
      <Box width={isTablet ? 282 : 385} mt={"10px"}>
        <BodyText
          size={"exsm"}
          fontWeight="600"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {addEmptyLine(description)}
        </BodyText>
      </Box>
    </Box>
  );
};

export default RecipeStep;
