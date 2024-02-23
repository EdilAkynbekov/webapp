import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// RecipeCardProps type definition if needed
interface RecipeCardProps {
  recipe: {
    title: string;
    imageUrl: string;
    tags: string; // For example: "Vegetarian | Vegan | High Protein"
    duration: string;
    difficulty: string;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card
      sx={{ width: 234, cursor: "pointer" }}
      className="group h-[300px] w-[234px] cursor-pointer rounded-xl bg-[#FCE6B2] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[13px] text-left text-xs text-saddlebrown font-poppins hover:bg-[#866B31]"
    >
      <div className="self-stretch flex flex-col items-end justify-start cursor-pointer">
        <button className="cursor-pointer py-2 px-4 bg-black rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-end whitespace-nowrap border-[0.5px] border-solid">
          <div className="relative text-xs font-semibold font-poppins text-orange text-center">
            {recipe.difficulty} | {recipe.duration}
          </div>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center py-0 mx-auto">
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          className="group-hover:text-orange font-semibold text-center"
        >
          {recipe.tags}
        </Typography>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-2.5">
        <CardMedia
          component="img"
          image={recipe.imageUrl}
          alt={recipe.title}
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-2.5 text-lg group-hover:text-white text-black">
        <Typography
          variant="h5"
          component="h3"
          className=" m-0 h-[86px] flex-1 relative text-inherit tracking-[-0.02em] leading-[18.07px] capitalize font-semibold font-inherit inline-block text-center"
        >
          {recipe.title}
        </Typography>
      </div>
    </Card>
  );
};

export default RecipeCard;
