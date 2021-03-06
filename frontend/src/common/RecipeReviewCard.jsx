import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function RecipeReviewCard({
  title,
  subheader,
  image,
  alt,
  nav,
}) {
  return (
    <Card
      sx={{
        width: "250px",
        height: "400px",
        transition: "width 0.5s, height 0.5s, easy-out 0s",
        "&:hover": {
          width: "300px",
          height: "430px",
        },
      }}
    >
      <CardHeader title={title} subheader={subheader} />
      <CardMedia component="img" image={image} alt={alt} onClick={nav} />
    </Card>
  );
}
