import {
  SidePanel,
  TextSection,
  PhotosSection,
  ElementsSection,
  TemplatesSection,
  UploadSection,
  BackgroundSection,
  SizeSection,
  LayersSection,
  SectionTab,
  DEFAULT_SECTIONS,
} from "polotno/side-panel";
import React from "react";
import { observer } from "mobx-react-lite";
import { InformationSection, InformationTab } from "./InformationSection";
import { CustomMaterialSection } from "./CustomMaterialSection";
import { CustomSizesPanel } from "./CustomSizesPanel";

export const CustomSidePanel = (props) => {
  const sections = [
    { name: "information", Tab: InformationTab, Panel: InformationSection },
    CustomSizesPanel,
    CustomMaterialSection,
    TemplatesSection,
    TextSection,
    ElementsSection,
    UploadSection,
    LayersSection,
    // ...DEFAULT_SECTIONS,
  ];

  return <SidePanel store={props.store} sections={sections} />;
};
