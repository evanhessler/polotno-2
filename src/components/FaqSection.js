import React from "react";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

// Styled components using MUI v5
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  minHeight: 78,
  "& .MuiAccordionSummary-content": {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const items = [
    {
      question: "Integer ornare neque mauris?",
      answer:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
    {
      question: "Suspendisse ut tincidunt?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
    {
      question: "Ut enim ad minim veniam?",
      answer:
        "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
    {
      question: "In velit mi, rhoncus dictum neque?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <StyledAccordion
            key={index}
            expanded={false}
            // Note: To handle expansion state, you may need to manage it with useState
          >
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </StyledAccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
