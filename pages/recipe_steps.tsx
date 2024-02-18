import React, { useState } from "react";
import RightPanel from "../components/recipe/right-panel";
import RecipeStep from "../components/recipe/RecipeStep";
import Image1 from "../public/food1.png";
import Image2 from "../public/food2.png";
import CustomButton from "../components/common/CustomButton";
import { BodyText, Heading1 } from "../components/typography";
import { Box } from "@mui/material";
const RecipeSteps = () => {
  const fakeData = [
    {
      step: 1,
      imgSrc: Image1,
      description:
        "Remove the leaves and stems (leaving about 2-3cm to stop the beetroot from losing its colour) of the beetroot.Wash the beetroot under cold running water and gently rub the skin with paper tower to remove the dirt.Boil it for 20 - 35 minutes, until it is soft enough that you can slice your knife in easily.",
    },
    {
      step: 2,
      imgSrc: Image2,
      description:
        "Remove the leaves and stems (leaving about 2-3cm to stop the beetroot from losing its colour) of the beetroot.Wash the beetroot under cold running water and gently rub the skin with paper tower to remove the dirt. Boil it for 20 - 35 minutes, until it is soft enough that you can slice your knife in easily",
    },
    {
      step: 3,
      imgSrc: Image2,
      description:
        "Remove the leaves and stems (leaving about 2-3cm to stop the beetroot from losing its colour) of the beetroot.Wash the beetroot under cold running water and gently rub the skin with paper tower to remove the dirt.Boil it for 20 - 35 minutes, until it is soft enough that you can slice your knife in easily.",
    },
    {
      step: 4,
      imgSrc: Image1,
      description:
        "Remove the leaves and stems (leaving about 2-3cm to stop the beetroot from losing its colour) of the beetroot.Wash the beetroot under cold running water and gently rub the skin with paper tower to remove the dirt. Boil it for 20 - 35 minutes, until it is soft enough that you can slice your knife in easily",
    },
  ];
  const [page, setPage] = useState(2);
  const lastPage = fakeData.length > page;
  return (
    <Box
      //   width={"100%"}
      height={"100%"}
      bgcolor={"#FFB527"}
      pl={"260px"}
      maxWidth={"calc(100%-260px)"}
    >
      <Box pt={"40px"}>
        <Box
          width={"calc(100% - 40px)"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
          mb={"50px"}
        >
          <Heading1 style={{ margin: 0 }} color="white">
            Recipe
          </Heading1>
          <Box display={"flex"} gap={"16px"} alignItems={"flex-end"}>
            <CustomButton
              onClick={() => setPage(page - 2)}
              disabled={page === 2}
              style={{
                fontWeight: 600,
                fontSize: "18px",
                height: "fit-content",
              }}
              variant="filled"
            >
              Previous
            </CustomButton>
            <Box>
              <BodyText
                size="sm"
                fontWeight="600"
                style={{
                  visibility: lastPage ? "hidden" : "inherit",
                }}
              >
                Bon Appétit!
              </BodyText>
              <CustomButton
                onClick={() => {
                  if (lastPage) setPage(page + 2);
                }}
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  width: "100%",
                  backgroundColor: !lastPage ? "#808080" : "",
                }}
                variant="filled"
              >
                {lastPage ? "Next" : "Leave"}
              </CustomButton>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"calc(100% - 40px)"}
        >
          <Box
            maxWidth={"900px"}
            borderRadius={"20px"}
            p={"20px 20px"}
            bgcolor={"white"}
            justifyContent={"space-between"}
            gap={"20px"}
            display={"flex"}
            m={"auto"}
          >
            {fakeData
              .filter((_, i) => i < page && i >= page - 2)
              .map((data, index) => {
                return (
                  <RecipeStep
                    key={data.step}
                    step={data.step}
                    imgSrc={data.imgSrc}
                    description={data.description}
                  />
                );
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeSteps;
