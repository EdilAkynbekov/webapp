import React, { useState } from "react";
import RightPanel from "../components/recipe/right-panel"; // Make sure this is the correct path
import IngredientsList from "../components/recipe/recipe-ingredients"; // Make sure this is the correct path
import { Box, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BlenderIcon from "@mui/icons-material/Blender"; // assuming you have an icon for a blender
import EquipmentList from "../components/recipe/EquipmentList";

// Assuming you have a specific type for ingredient items
type IngredientItem = {
  name: string;
  quantity: number; // Base quantity for 1 serving
  unit: string;
};

type EquipmentList = {
  equipment: string[];
};

const RecipeComponent = () => {
  // Base ingredients for 1 serving
  const baseIngredients: IngredientItem[] = [
    { name: "Extra Virgin Olive Oil", quantity: 2, unit: "tbsp" },
    { name: "Garlic", quantity: 2, unit: "cloves" },
    { name: "Beetroot", quantity: 100, unit: "g" },
    { name: "Tofu", quantity: 20, unit: "g" },
    { name: "Pasta", quantity: 120, unit: "g" },
    {
      name: "Extra Virgin Olive Oil",
      quantity: 2,
      unit: "tbsp",
    },
    { name: "Garlic", quantity: 2, unit: "cloves" },
    { name: "Beetroot", quantity: 100, unit: "g" },
    { name: "Tofu", quantity: 20, unit: "g" },
    { name: "Pasta", quantity: 120, unit: "g" },
    { name: "Pasta", quantity: 120, unit: "g" },
    // Add more base ingredients if needed
  ];
  const equipmentList: EquipmentList = {
    equipment: ["Blender", "Oven", "Frying Pan"],
  };

  // State for the serving size
  const [servingSize, setServingSize] = useState(1);

  // Function to adjust ingredient quantities based on serving size
  const getAdjustedIngredients = () =>
    baseIngredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * servingSize,
    }));

  // Handlers to increment and decrement the serving size
  const incrementServingSize = () => setServingSize(servingSize + 1);
  const decrementServingSize = () => {
    if (servingSize > 1) {
      setServingSize(servingSize - 1);
    }
  };

  // Render adjusted ingredients
  const adjustedIngredients = getAdjustedIngredients();

  return (
    <Box className="w-full relative bg-[#FFB527] min-h-screen overflow-y-auto flex flex-row items-start justify-center py-0 pr-[30px] pl-[30px] md:pr-0 md:pl-0 lg:pr-10 lg:pl-0 box-border gap-[40px] text-center text-xs text-black1 font-poppins">
      <RightPanel />
      <Box className="flex-1 flex flex-col items-center justify-center py-10 md:pl-10 md:pr-10 lg:pr-0 lg:pl-[260px] text-white">
        <Box className="self-stretch flex flex-row flex-wrap items-end justify-between gap-10 mb-6">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: "64px",
              fontWeight: "bold",
              "@media (max-width: 750px)": { fontSize: "51px" },
              "@media (max-width: 450px)": { fontSize: "38px" },
            }}
          >
            Recipe
          </Typography>
          <Box className="flex flex-row items-end justify-center gap-10">
            <Button className="text-orange bg-black hover:bg-white self-stretch rounded-xl cursor-pointer font-bold shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center py-1 px-[25px] font-poppins">
              Previous
            </Button>
            <Button className="text-orange bg-black hover:bg-white self-stretch rounded-xl cursor-pointer font-bold shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center py-1 px-[45px] font-poppins">
              Next
            </Button>
          </Box>
        </Box>
        {/* ... rest of the component */}
        <Box
          className="self-stretch rounded-xl max-w-[951px] bg-white overflow-y-auto flex flex-col md:flex-row items-start gap-5 text-black mx-auto xl:min-w-[1000px]"
          sx={{
            maxWidth: "100%",
            "@media (max-width: 750px)": { padding: "5px" },
          }}
        >
          <Box
            className="min-w-[200px] flex flex-col justify-start gap-5"
            sx={{
              padding: "20px",
              "@media (max-width: 750px)": { padding: "10px" },
            }}
          >
            {" "}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                "@media (max-width: 750px)": { fontSize: "51px" },
                "@media (max-width: 450px)": { fontSize: "38px" },
              }}
            >
              Serving Size
            </Typography>
            <Box className="flex flex-row justify-center items-center bg-black text-white rounded-lg">
              <IconButton
                onClick={decrementServingSize}
                disabled={servingSize === 1}
                className="bg-white rounded-[5px] py-1 mr-4 hover:bg-white"
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h5">{servingSize}</Typography>
              <IconButton
                className="bg-white rounded-[5px] py-1 mx-2 ml-4 my-2 hover:bg-white"
                onClick={incrementServingSize}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                "@media (max-width: 750px)": { fontSize: "51px" },
                "@media (max-width: 450px)": { fontSize: "38px" },
              }}
            >
              You need:
            </Typography>
            <EquipmentList equipment={equipmentList.equipment} />
          </Box>
          <Box className="flex-1 flex flex-col justify-center gap-5 py-5 px-5">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                className: "self-stretch w-full",
              }}
            >
              <Box className="flex flex-row mb-4">
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "@media (max-width: 750px)": { fontSize: "51px" },
                    "@media (max-width: 450px)": { fontSize: "38px" },
                  }}
                >
                  Ingredients
                </Typography>
                <Button
                  className="flex-1 w-full items-end justify-end text-black1"
                  variant="text"
                  sx={{}}
                >
                  + Add to Shopping List
                </Button>
              </Box>
              <IngredientsList
                className="bg-[#6C6C6F] text-white"
                ingredients={adjustedIngredients.map(
                  (ingredient) =>
                    `${ingredient.name}         ${ingredient.quantity} ${ingredient.unit}`
                )}
                isDarkMode={false}
              />
              {/* ... rest
        {/* ... of the content */}
            </Box>

            {/* Add to Shopping List Button */}

            {/* Seasonings Section, if seasonings need to be adjusted similarly, follow the same pattern as for ingredients */}
            {/* ... Seasonings Section ... */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box className="flex justify-between flex-row mb-4">
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "@media (max-width: 750px)": { fontSize: "51px" },
                    "@media (max-width: 450px)": { fontSize: "38px" },
                  }}
                >
                  Seasonings
                </Typography>
                <Button
                  className="flex-1 w-full items-end justify-end text-black1"
                  variant="text"
                  sx={{}}
                >
                  + Add to Shopping List
                </Button>
              </Box>
              <IngredientsList
                className="bg-[#33363F] text-[#FFB527]"
                ingredients={adjustedIngredients.map(
                  (ingredient) =>
                    `${ingredient.name} ${ingredient.quantity}${ingredient.unit}`
                )}
                isDarkMode={false}
              />
              {/* ... rest
        {/* ... of the content */}
            </Box>
          </Box>
        </Box>
        {/* Add to Shopping List Button for Seasonings */}

        {/* ... Possibly other components like RightPanel, etc. ... */}
      </Box>
    </Box>
  );
};

export default RecipeComponent;
