import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";
import { emphasize } from "@mui/material/styles";

// Styled components using MUI v5
const GridItem = styled(Grid)(({ theme }) => ({
  boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
  textAlign: "center",
}));

const ImageContainer = styled("div")(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "200px",
  marginBottom: "30px",
  "& img": {
    width: "100%",
  },
}));

function FeaturesSection(props) {
  const items = [
    {
      title: "Lorem Ipsum",
      body: "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
    },
    {
      title: "Lorem Ipsum",
      body: "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.",
      image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
    },
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper",
      image: "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
    },
    {
      title: "Lorem Ipsum",
      body: "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Card raised={false}>
          <Grid container>
            {items.map((item, index) => (
              <GridItem item xs={12} md={6} key={index}>
                <Box p={6}>
                  <ImageContainer>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={item.title} />
                    </AspectRatio>
                  </ImageContainer>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">{item.body}</Typography>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
