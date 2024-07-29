import React from "react";
import Box from "@mui/material/Box";
import LinkMui from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Link } from "./../util/router";

// Styled components using MUI v5
const Root = styled("div")(({ theme }) => ({
  fontSize: "0.9rem",
  textAlign: "center",
  marginTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const SpacerSmall = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: theme.spacing(1),
}));

const SpacerMedium = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: theme.spacing(2),
}));

function AuthFooter(props) {
  return (
    <Root>
      {props.type === "signup" && (
        <>
          {props.showAgreement && (
            <Box mb={2}>
              By signing up, you are agreeing to our{" "}
              <LinkMui component={Link} to={props.termsPath}>
                Terms of Service
              </LinkMui>{" "}
              and{" "}
              <LinkMui component={Link} to={props.privacyPolicyPath}>
                Privacy Policy
              </LinkMui>
              .
            </Box>
          )}

          {props.signinText}
          <SpacerSmall />
          <LinkMui component={Link} to={props.signinPath}>
            {props.signinAction}
          </LinkMui>
        </>
      )}

      {props.type === "signin" && (
        <>
          <LinkMui component={Link} to={props.signupPath}>
            {props.signupAction}
          </LinkMui>

          {props.forgotPassAction && (
            <>
              <SpacerMedium />
              <LinkMui component={Link} to={props.forgotPassPath}>
                {props.forgotPassAction}
              </LinkMui>
            </>
          )}
        </>
      )}

      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <SpacerSmall />
          <LinkMui component={Link} to={props.signinPath}>
            {props.signinAction}
          </LinkMui>
        </>
      )}
    </Root>
  );
}

export default AuthFooter;
