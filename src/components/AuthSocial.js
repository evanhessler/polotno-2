import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import { useAuth } from "./../util/auth";

// Styled components
const StyledButton = styled(Button)(({ theme, disabled }) => ({
  position: "relative",
  marginBottom: !disabled ? theme.spacing(1) : 0,
}));

const Icon = styled("div")(({ theme }) => ({
  position: "absolute",
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  width: "1.5em",
  height: "1.5em",
  left: "0.5em",
  "& > img": {
    display: "block",
    width: "100%",
  },
}));

const LastUsedIndicator = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-6px",
  right: "-6px",
  fontSize: "13px",
  lineHeight: 1,
  textTransform: "initial",
  padding: "3px 5px",
  borderRadius: "7px",
  color: "white",
  backgroundColor: theme.palette.warning.main,
  opacity: 0.8,
}));

function AuthSocial(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(null);
  const [lastUsed, setLastUsed] = useState(null);

  const providerDisplayNames = {
    google: "Google",
    facebook: "Facebook",
    twitter: "Twitter",
    github: "GitHub",
  };

  const onSigninWithProvider = (provider) => {
    setPending(provider);
    auth
      .signinWithProvider(provider)
      .then((user) => {
        localStorage.setItem("lastUsedAuthProvider", provider);
        props.onAuth(user);
      })
      .catch((error) => {
        setPending(null);
        props.onError(error.message);
      });
  };

  useEffect(() => {
    if (props.showLastUsed) {
      const lastUsed = window.localStorage.getItem("lastUsedAuthProvider");
      if (lastUsed) {
        setLastUsed(lastUsed);
      }
    }
  }, [props.showLastUsed]);

  return (
    <div>
      {props.providers.map((provider) => (
        <StyledButton
          variant="outlined"
          size="large"
          type="submit"
          disabled={pending === provider}
          fullWidth={true}
          onClick={() => onSigninWithProvider(provider)}
          key={provider}
        >
          <Icon>
            <img
              src={`https://uploads.divjoy.com/icon-${provider}.svg`}
              alt={providerDisplayNames[provider]}
            />
          </Icon>

          {pending !== provider && (
            <span>
              {props.buttonAction} with {providerDisplayNames[provider]}
            </span>
          )}

          {pending === provider && <CircularProgress size={28} />}

          {provider === lastUsed && (
            <LastUsedIndicator>Last used</LastUsedIndicator>
          )}
        </StyledButton>
      ))}
    </div>
  );
}

export default AuthSocial;
