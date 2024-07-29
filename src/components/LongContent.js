import React from "react";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  "& h1": {
    ...theme.typography.h4,
    fontWeight: 600,
  },
  "& h2": {
    ...theme.typography.h5,
    fontWeight: 600,
  },
  "& h3": {
    ...theme.typography.h6,
    fontWeight: 600,
  },
  "& a": {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function LongContent(props) {
  return <Root>{props.children}</Root>;
}

export default LongContent;
