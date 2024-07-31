import { Toolbar } from "polotno/toolbar/toolbar";
import React from "react";
import { Button } from "@blueprintjs/core";

export const CustomToolbar = (props) => {
  const TextFill = () => null;
  const ImageFill = () => null;
  const SvgFill = () => null;
  const FigureFill = () => null;
  const LineColor = () => null;
  const Opacity = () => null;
  const Stroke = () => null;
  const Shadow = () => null;
  const Effects = () => null;
  const FigureStroke = () => null;
  const FigureSettings = () => null;
  const FigureFilters = () => null;

  const CustomLogo = () => {
    console.log("CustomLogo component is rendering"); // Debugging log
    return (
      <div style={{ marginRight: "auto" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Moelen.jpg/1200px-Moelen.jpg"
          alt="Custom Logo"
          style={{ height: "40px", width: "40px" }}
          onError={(e) => {
            console.error("Failed to load logo image:", e);
            alert("Failed to load logo image."); // Alert for visible feedback
          }}
        />
      </div>
    );
  };

  const ActionControls = () => (
    <div style={{ display: "flex", alignItems: "center" }}></div>
  );

  return (
    <Toolbar
      store={props.store}
      downloadButtonEnabled={false}
      components={{
        CustomLogo,
        TextFill,
        ImageFill,
        SvgFill,
        FigureFill,
        LineColor,
        Opacity,
        Stroke,
        Shadow,
        Effects,
        // FigureStroke,
        // FigureSettings,
        // FigureFilters,
        ActionControls,
      }}
    />
  );
};
