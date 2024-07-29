import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const SectionHeaderStyled = styled(Box)(({ theme, subtitle }) => ({
  // Add bottom margin if element below
  "&:not(:last-child)": {
    marginBottom: "2rem",
  },
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  // Subtitle text generally isn't very long
  // so usually looks better to limit width.
  maxWidth: 700,
  // So we can have max-width but still
  // have alignment controlled by text-align.
  display: "inline-block",
}));

function SectionHeader(props) {
  const { subtitle, title, size, className, ...otherProps } = props;

  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <SectionHeaderStyled
      component="header"
      className={className}
      subtitle={subtitle}
      {...otherProps}
    >
      {title && (
        <Typography variant={`h${size}`} gutterBottom={Boolean(subtitle)}>
          {title}
        </Typography>
      )}

      {subtitle && (
        <SubtitleTypography variant="subtitle1">{subtitle}</SubtitleTypography>
      )}
    </SectionHeaderStyled>
  );
}

export default SectionHeader;
