import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";

// Styled component using MUI v5
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: `0 ${theme.spacing(3)}px`,
  textAlign: "center",
}));

function CtaSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <StyledContainer>
        <Grid container alignItems="center" justifyContent="center" spacing={5}>
          <Grid item xs={12} md="auto">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
            />
          </Grid>
          <Grid item xs={12} md="auto">
            <Button
              component={Link}
              to={props.buttonPath}
              variant="contained"
              size="large"
              color={props.buttonColor}
            >
              {props.buttonText}
            </Button>
          </Grid>
        </Grid>
      </StyledContainer>
    </Section>
  );
}

export default CtaSection;
