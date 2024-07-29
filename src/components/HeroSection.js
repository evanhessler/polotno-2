import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";

function HeroSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
          />
          <Button
            component={Link}
            to={props.buttonPath}
            variant="contained"
            size="large"
            color={props.buttonColor}
          >
            {props.buttonText}
          </Button>
        </Box>
      </Container>
    </Section>
  );
}

export default HeroSection;
