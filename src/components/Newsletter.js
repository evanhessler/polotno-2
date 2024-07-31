import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import newsletter from "./../util/newsletter";

function Newsletter(props) {
  const [subscribed, setSubscribed] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email }) => {
    setSubscribed(true);
    // Parent component can optionally
    // find out when subscribed.
    props.onSubscribed && props.onSubscribed();
    // Subscribe them
    newsletter.subscribe({ email });
  };

  return (
    <>
      {subscribed === false && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                variant="outlined"
                type="email"
                label="Email"
                {...register("email", {
                  required: "Please enter an email address",
                })}
                error={errors.email ? true : false}
                helperText={errors.email && errors.email.message}
                fullWidth
              />
            </Grid>
            <Box display="flex" alignItems="stretch" clone>
              <Grid item xs="auto">
                <Button
                  variant="contained"
                  color={props.buttonColor}
                  size="large"
                  type="submit"
                >
                  {props.buttonText}
                </Button>
              </Grid>
            </Box>
          </Grid>
        </form>
      )}

      {subscribed === true && <div>{props.subscribedMessage}</div>}
    </>
  );
}

export default Newsletter;
