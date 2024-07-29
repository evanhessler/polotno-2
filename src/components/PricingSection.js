import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

const CardStyled = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: theme.spacing(3),
}));

const Price = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  paddingTop: 2,
  paddingBottom: 2,
}));

const PerkIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 34,
  color: theme.palette.success.main,
}));

function PricingSection(props) {
  const auth = useAuth();

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "10",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "20",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
      ],
    },
    {
      id: "business",
      name: "Business",
      price: "50",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
      ],
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
        <Grid container justifyContent="center" spacing={4}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CardStyled>
                <CardContentStyled>
                  <Typography variant="h6" component="h2">
                    {plan.name}
                  </Typography>
                  <Price mt={1}>
                    <Typography variant="h3">${plan.price}</Typography>
                    <Typography variant="h4" color="textSecondary">
                      /mo
                    </Typography>
                  </Price>

                  {plan.description && (
                    <Box mt={2}>
                      <Typography component="p" color="textSecondary">
                        {plan.description}
                      </Typography>
                    </Box>
                  )}

                  {plan.perks && (
                    <Box mt={1}>
                      <List aria-label="perks">
                        {plan.perks.map((perk, index) => (
                          <ListItemStyled disableGutters key={index}>
                            <PerkIcon>
                              <CheckIcon />
                            </PerkIcon>
                            <ListItemText>{perk}</ListItemText>
                          </ListItemStyled>
                        ))}
                      </List>
                    </Box>
                  )}

                  <Box mt="auto" pt={3}>
                    <Button
                      component={Link}
                      to={
                        auth.user
                          ? `/purchase/${plan.id}`
                          : `/auth/signup?next=/purchase/${plan.id}`
                      }
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Choose
                    </Button>
                  </Box>
                </CardContentStyled>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default PricingSection;
