import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import AuthSocial from "./AuthSocial";
import { useAuth } from "./../util/auth";

const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}));

function ReauthModal(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { pass } = data;
    setPending(true);

    auth
      .signin(auth.user.email, pass)
      .then(() => {
        // Call failed action that originally required reauth
        props.callback();
        // Let parent know we're done so they can hide modal
        props.onDone();
      })
      .catch((error) => {
        // Hide pending indicator
        setPending(false);
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      });
  };

  return (
    <Dialog open={true} onClose={props.onDone}>
      <DialogTitle>Please sign in again to complete this action</DialogTitle>
      <DialogContentStyled>
        {formAlert && (
          <Box mb={4}>
            <Alert severity={formAlert.type}>{formAlert.message}</Alert>
          </Box>
        )}

        {props.provider === "password" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  label="Password"
                  name="pass"
                  error={!!errors.pass}
                  helperText={errors.pass?.message}
                  fullWidth
                  autoFocus
                  inputRef={register({
                    required: "Please enter your password",
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  disabled={pending}
                  fullWidth
                >
                  {!pending && "Submit"}

                  {pending && <CircularProgress size={28} />}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}

        {props.provider !== "password" && (
          <AuthSocial
            type="signin"
            buttonText="Sign in"
            providers={[props.provider]}
            showLastUsed={false}
            onAuth={() => {
              props.callback();
              props.onDone();
            }}
            onError={(message) => {
              setFormAlert({
                type: "error",
                message: message,
              });
            }}
          />
        )}
      </DialogContentStyled>
    </Dialog>
  );
}

export default ReauthModal;
