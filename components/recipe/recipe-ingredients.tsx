import React from "react";
import { Box, List, ListItem, Typography, Grid } from "@mui/material";

// Define a type for the ingredient object
type Ingredient = {
  name: string;
  quantity: string;
};

// Union type that allows both string array or object array
type IngredientItem = string | Ingredient;

interface IngredientsListProps {
  ingredients: IngredientItem[];
  isDarkMode?: boolean;
  className?: string;
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  isDarkMode = false,
  className,
}) => {
  const maxItemsPerColumn = 6;

  // Split ingredients into columns
  const columns = ingredients.reduce<IngredientItem[][]>((acc, item, index) => {
    const columnIndex = Math.floor(index / maxItemsPerColumn);
    if (!acc[columnIndex]) {
      acc[columnIndex] = [];
    }
    acc[columnIndex].push(item);
    return acc;
  }, []);

  return (
    <Grid
      container
      spacing={2}
      className={className}
      sx={{ borderRadius: "10px", boxSizing: "border-box" }}
    >
      {columns.map((column, columnIndex) => (
        <Grid item xs={12} sm={6} key={columnIndex} sx={{ maxWidth: "100%" }}>
          {" "}
          {/* Set maxWidth to constrain column width */}
          <List sx={{ width: "100%" }}>
            {column.map((ingredient, index) => {
              // Check if the ingredient is a string or an object
              const isString = typeof ingredient === "string";
              const name = isString
                ? ingredient.split(":")[0]
                : ingredient.name;
              const quantity = isString
                ? ingredient.split(":")[1]
                : ingredient.quantity;

              return (
                <ListItem
                  key={index}
                  sx={{
                    bgcolor: "transparent",
                    marginBottom: "5px",
                    "&:last-child": {
                      borderBottom: "none",
                    },
                    display: "flex",
                    justifyContent: "space-between", // Aligns items to the left and right
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {quantity}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default IngredientsList;
