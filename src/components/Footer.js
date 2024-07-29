import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkMui from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import Section from "./Section";
import { Link } from "./../util/router";

// Styled components using MUI v5
const StickySection = styled(Section)(({ theme, sticky }) => ({
  ...(sticky && {
    marginTop: "auto",
  }),
}));

const Brand = styled("img")({
  display: "block",
  height: 32,
});

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 12,
  paddingRight: 12,
}));

const ListItemTextHeader = styled(Typography)({
  fontWeight: "bold",
});

const SocialIcon = styled(ListItemIcon)({
  minWidth: 30,
});

const Legal = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontSize: "0.875rem",
  opacity: 0.6,
  "& a": {
    color: "inherit",
    marginLeft: "0.8rem",
  },
}));

function Footer(props) {
  const logo = props.logo;

  return (
    <StickySection
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      sticky={props.sticky}
    >
      <Container>
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item xs={12} md={4}>
            <Link to="/">
              <Brand src={logo} alt="Logo" />
            </Link>

            {props.description && (
              <Box mt={3}>
                <Typography component="p">{props.description}</Typography>
              </Box>
            )}

            <Legal>
              {props.copyright}
              <LinkMui component={Link} to="/legal/terms-of-service">
                Terms
              </LinkMui>
              <LinkMui component={Link} to="/legal/privacy-policy">
                Privacy
              </LinkMui>
            </Legal>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <List disablePadding>
                  <ListItemStyled>
                    <ListItemTextHeader variant="overline">
                      Product
                    </ListItemTextHeader>
                  </ListItemStyled>
                  <ListItemStyled component={Link} to="/pricing" button>
                    <ListItemText>Pricing</ListItemText>
                  </ListItemStyled>
                  <ListItemStyled component={Link} to="/faq" button>
                    <ListItemText>FAQ</ListItemText>
                  </ListItemStyled>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List disablePadding>
                  <ListItemStyled>
                    <ListItemTextHeader variant="overline">
                      Company
                    </ListItemTextHeader>
                  </ListItemStyled>
                  <ListItemStyled component={Link} to="/about" button>
                    <ListItemText>About</ListItemText>
                  </ListItemStyled>
                  <ListItemStyled component={Link} to="/contact" button>
                    <ListItemText>Contact</ListItemText>
                  </ListItemStyled>
                  <ListItemStyled
                    button
                    component="a"
                    href="https://medium.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ListItemText>Blog</ListItemText>
                  </ListItemStyled>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List disablePadding>
                  <ListItemStyled>
                    <ListItemTextHeader variant="overline">
                      Social
                    </ListItemTextHeader>
                  </ListItemStyled>
                  <ListItemStyled
                    button
                    component="a"
                    href="https://twitter.com/divjoy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon>
                      <img
                        src="https://uploads.divjoy.com/icon-twitter.svg"
                        alt="Twitter"
                      />
                    </SocialIcon>
                    <ListItemText>Twitter</ListItemText>
                  </ListItemStyled>
                  <ListItemStyled
                    button
                    component="a"
                    href="https://facebook.com/DivjoyOfficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon>
                      <img
                        src="https://uploads.divjoy.com/icon-facebook.svg"
                        alt="Facebook"
                      />
                    </SocialIcon>
                    <ListItemText>Facebook</ListItemText>
                  </ListItemStyled>
                  <ListItemStyled
                    button
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon>
                      <img
                        src="https://uploads.divjoy.com/icon-instagram.svg"
                        alt="Instagram"
                      />
                    </SocialIcon>
                    <ListItemText>Instagram</ListItemText>
                  </ListItemStyled>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StickySection>
  );
}

export default Footer;
