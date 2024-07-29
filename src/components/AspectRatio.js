import React from "react";
import { styled } from "@mui/system";

// Styled components
const Root = styled("div")(({ theme, ratio }) => ({
  position: "relative",
  width: "100%",
  height: 0,
  paddingBottom: `${(1 / ratio) * 100}%`, // Move dynamic style calculation here
}));

const Inner = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

function AspectRatio(props) {
  // Directly use styled components in render
  return (
    <Root ratio={props.ratio}>
      <Inner>{props.children}</Inner>
    </Root>
  );
}

export default AspectRatio;
