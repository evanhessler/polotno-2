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
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/030/188/390/small_2x/beautiful-natural-stone-background-ai-photo.jpg",
      },
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/030/188/390/small_2x/beautiful-natural-stone-background-ai-photo.jpg",
      },
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/030/188/390/small_2x/beautiful-natural-stone-background-ai-photo.jpg",
      },
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/030/188/390/small_2x/beautiful-natural-stone-background-ai-photo.jpg",
      },
    ];

    const handleBackgroundSelect = async (image, pos, element, event) => {
      console.log("Selected background URL:", image.url);
      store.activePage?.set({
        background: image.url,
      });
      console.log("Updated active page:", store.activePage);
    };

    return (
      <div>
        <p>Select a custom background image:</p>
        <ImagesGrid
          images={backgroundUrls}
          getPreview={(item) => item.url}
          onSelect={handleBackgroundSelect}
          isLoading={false}
          loadMore={() => {}}
          getCredit={(image) => <span>Photo by Source</span>}
          rowsNumber={2}
          crossOrigin="anonymous"
          itemHeight={"150px"}
          error={false}
        />
      </div>
    );
  }),
};
