import React from "react";
import { styled } from "@mui/material/styles";

// Styled component using MUI v5
const BackgroundDiv = styled("div")(({ theme }) => ({
  content: '""',
  backgroundPosition: "center center",
  backgroundSize: "cover",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  zIndex: 0,
}));

function BackgroundImage(props) {
  const { image, opacity, ...otherProps } = props;

  return (
    <BackgroundDiv
      style={{
        backgroundImage: `url(${image})`,
        opacity: opacity,
      }}
      {...otherProps}
    />
  );
}

export default BackgroundImage;
