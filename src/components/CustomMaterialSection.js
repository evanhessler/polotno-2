import React from "react";
import { observer } from "mobx-react-lite";
import { SectionTab } from "polotno/side-panel";
import FaShapes from "@meronex/icons/fa/FaShapes";
import { ImagesGrid } from "polotno/side-panel/images-grid";

export const CustomMaterialSection = {
  name: "customBackground",
  Tab: (props) => (
    <SectionTab name="Material" {...props}>
      <FaShapes icon="new-text-box" />
    </SectionTab>
  ),
  Panel: observer(({ store }) => {
    const backgroundUrls = [
      { url: "Autumn-Brown-1024x1024.png" },
      { url: "Bahama-Blue_web.png" },
      { url: "Barre-Gray_02_web.png" },
      { url: "Carnelian_web.png" },
      { url: "Charcoal-black_web.png" },
      { url: "Gold-Star.png" },
      { url: "Imperial-Rose.png" },
      { url: "India-Black_05_web.png" },
      { url: "India-Mist_web.png" },
      { url: "Jet-Mist_web.png" },
      { url: "New-Imperial-Red_05_web.png" },
    ];

    const handleBackgroundSelect = async (image, pos, element, event) => {
      console.log("Selected background URL:", image.url);
      store.activePage?.set({
        background: image.url,
      });
      console.log("Updated active page:", store.activePage);
    };

    return (
      <div style={{ padding: "5px", overflowY: "scroll", height: "100vh" }}>
        <h3>Select Material</h3>
        <ImagesGrid
          images={backgroundUrls}
          getPreview={(item) => item.url}
          onSelect={handleBackgroundSelect}
          isLoading={false}
          loadMore={() => {}}
          getCredit={(image) => <span>Photo by Source</span>}
          rowsNumber={2}
          crossOrigin="anonymous"
          error={false}
        />
      </div>
    );
  }),
};
