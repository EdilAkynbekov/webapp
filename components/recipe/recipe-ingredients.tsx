import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Checkbox,
  Grid,
} from "@mui/material";

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

  className,
}) => {
  const maxItemsPerColumn = 5;

  const columns = ingredients.reduce<IngredientItem[][]>((acc, item, index) => {
    const columnIndex = Math.floor(index / maxItemsPerColumn);
    if (!acc[columnIndex]) {
      acc[columnIndex] = [];
    }
    acc[columnIndex].push(item);
    return acc;
  }, []);

  // A helper function to render the ingredient text
  const renderIngredientText = (ingredient: IngredientItem) => {
    if (typeof ingredient === "string") {
      return ingredient;
    } else {
      // Assuming you want to render both name and quantity when it's an object
      return `${ingredient.name}: ${ingredient.quantity}`;
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
      className={className}
    >
      {columns.map((column, columnIndex) => (
        <Grid item xs={12} sm={6} key={columnIndex}>
          {" "}
          {/* Adjust grid sizing as needed */}
          <List sx={{ width: "100%" }}>
            {column.map((ingredient, index) => (
              <ListItem
                key={index}
                sx={{
                  bgcolor: "transparent",
                  marginBottom: "5px",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold", flexGrow: 1 }}>
                  {typeof ingredient === "string"
                    ? ingredient
                    : `${ingredient.name}: ${ingredient.quantity}`}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default IngredientsList;
