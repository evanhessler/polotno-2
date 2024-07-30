import React, { useState } from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { CustomToolbar } from "./CustomToolbar";
import { CustomSidePanel } from "./CustomSidePanel";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import "@blueprintjs/core/lib/css/blueprint.css";

// Create the Polotno store
const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
  showCredit: true,
});

store.addPage({
  width: 1000,
  height: 500,
});

console.log("STORE ", store.toJSON());

export const Editor = () => {
  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <CustomSidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <CustomToolbar store={store} />
        <Workspace store={store} components={{ PageControls: () => null }} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

export default Editor;
