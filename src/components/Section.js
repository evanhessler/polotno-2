import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { emphasize } from "@mui/material/styles";
import capitalize from "@mui/material/utils/capitalize";
import BackgroundImage from "./BackgroundImage";

const getBackgroundStyles = (theme, bgColor) => {
  const colors = {
    default: theme.palette.background.default,
    light: emphasize(theme.palette.background.default, 0.03),
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };

  const value = colors[bgColor] || colors.default;

  return {
    backgroundColor: value,
    color: theme.palette.getContrastText(value),
    "& + &": {
      borderTop: `1px solid ${emphasize(value, 0.09)}`,
    },
  };
};

const SectionStyled = styled(Box)(({ theme, bgColor, bgImageOpacity }) => ({
  position: "relative",
  padding: theme.spacing(
    {
      normal: 6,
      medium: 10,
      large: 20,
      auto: 0,
    }[theme.breakpoints.up()]
  ),
  ...(bgImageOpacity
    ? { backgroundImage: `url(${bgImageOpacity})`, backgroundSize: "cover" }
    : {}),
  ...(bgColor ? getBackgroundStyles(theme, capitalize(bgColor)) : {}),
  "& > .MuiContainer-root": {
    position: "relative",
  },
}));

function Section(props) {
  const {
    bgColor = "default",
    bgImage,
    bgImageOpacity,
    size = "normal",
    className,
    children,
    ...otherProps
  } = props;

  return (
    <SectionStyled
      component="section"
      bgColor={bgColor}
      bgImageOpacity={bgImageOpacity}
      className={className}
      {...otherProps}
    >
      {bgImage && <BackgroundImage image={bgImage} opacity={bgImageOpacity} />}
      {children}
    </SectionStyled>
  );
}

export default Section;
