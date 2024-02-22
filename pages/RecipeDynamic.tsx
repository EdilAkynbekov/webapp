import React from "react";
import RightPanel from "../components/recipe/right-panel"; // Assuming the path is correct
import RecipeCard from "../components/recipe/recipe-card";
import RecipeCard1 from "../components/recipe/recipe-card1";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Example recipe data, ideally fetched from an API or passed as props
const recipes = [
  {
    title: "Creamy Tomato Pasta",
    imageUrl: "/dish.svg",
    tags: "Vegetarian | Comfort Food",
    duration: "30 mins",
    difficulty: "Easy",
  },
  {
    title: "Quinoa and Black Bean Salad",
    imageUrl: "/dish.svg",
    tags: "Vegan | Gluten-Free | High Protein",
    duration: "25 mins",
    difficulty: "Easy",
  },
  {
    title: "Grilled Lemon Herb Chicken",
    imageUrl: "/dish.svg",
    tags: "Paleo | High Protein",
    duration: "45 mins",
    difficulty: "Medium",
  },
  {
    title: "Avocado Sushi Rolls",
    imageUrl: "/dish.svg",
    tags: "Vegan | Low Carb",
    duration: "35 mins",
    difficulty: "Medium",
  },
  {
    title: "Spicy Thai Curry",
    imageUrl: "/dish.svg",
    tags: "Pescatarian | Spicy",
    duration: "40 mins",
    difficulty: "Hard",
  },
  {
    title: "Rustic Apple Pie",
    imageUrl: "/dish.svg",
    tags: "Dessert | Comfort Food",
    duration: "1 hr 20 mins",
    difficulty: "Medium",
  },
  // Add more recipes as needed
];

const RecipeA = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",

        overflow: "hidden",
      }}
      className="bg-[#FFB527] justify-center items-center flex flex-row"
    >
      <RightPanel />
      <Box className="flex-1 flex flex-col items-center justify-center pt-10 md:pl-10 md:pr-10 lg:pr-0 lg:pl-[260px] text-white">
        <div className="self-stretch flex flex-row items-end justify-start max-w-full shrink-0 mq450:gap-[45px]">
          {/* Title and possibly other elements */}
          <h1 className="mb-6 w-[216px] relative text-xxl tracking-[-0.02em] leading-[18.07px] font-bold font-inherit flex items-center ">
            Recipe
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[25px] shrink-0 text-[20px] text-black">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[18.07px] font-semibold font-inherit mq450:text-[19px] mq450:leading-[14px]">
            Your Weekly Dinner Recommendation
          </h1>
        </div>

        <Box
          sx={{
            flex: 1,

            gap: 3,
            textAlign: "left",
            color: "white",
            maxWidth: "100%",
          }}
          className="justify-center items-center flex flex-col"
        >
          <Grid
            container
            spacing={2}
            sx={{ pt: 5, px: 5, pb: { xs: 8, lg: "50px" } }}
            className="justify-center items-center max-w-[1300px]"
          >
            {recipes.map((recipe, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                className="mb-8"
              >
                <RecipeCard1 recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeA;
