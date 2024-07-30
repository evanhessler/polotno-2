import React from "react";
import { observer } from "mobx-react-lite";
import { SectionTab } from "polotno/side-panel";
import { GiResize } from "react-icons/gi";
import { Button } from "@blueprintjs/core";

export const CustomSizesPanel = {
  name: "sizes",
  Tab: (props) => (
    <SectionTab name="Size" {...props}>
      <GiResize icon="new-text-box" />
    </SectionTab>
  ),
  Panel: observer(({ store }) => {
    const AVAILABLE_SIZES = [
      { width: 500, height: 500, label: "20x20 inches" },
      { width: 1000, height: 500, label: "40x20 inches" },
      { width: 1000, height: 1000, label: "40x40 inches" },
      { width: 1500, height: 750, label: "60x30 inches" },
    ];

    const MAX_WIDTH = 200; // maximum width for the boxes in the sidebar
    const SCALE_FACTOR = 0.2; // scaling factor for sizes

    return (
      <div style={{ padding: "5px" }}>
        <h3>Select Size</h3>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {AVAILABLE_SIZES.map(({ width, height, label }, i) => {
            const displayWidth = width * SCALE_FACTOR;
            const displayHeight = height * SCALE_FACTOR;

            return (
              <Button
                key={i}
                style={{
                  width: displayWidth,
                  height: displayHeight,
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  padding: 0,
                }}
                onClick={() => {
                  if (store.activePage) {
                    store.activePage.set({
                      width: width,
                      height: height,
                    });
                  }
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    );
  }),
};
