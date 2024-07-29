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
import { useAuth } from "./../util/auth";
import { useItem, updateItem, createItem } from "./../util/db";

// Styled components using MUI v5
const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}));

function EditItemModal(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // This will fetch item if props.id is defined
  // Otherwise query does nothing and we assume
  // we are creating a new item.
  const { data: itemData, status: itemStatus } = useItem(props.id);

  // If we are updating an existing item
  // don't show modal until item data is fetched.
  if (props.id && itemStatus !== "success") {
    return null;
  }

  const onSubmit = (data) => {
    setPending(true);

    const query = props.id
      ? updateItem(props.id, data)
      : createItem({ owner: auth.user.uid, ...data });

    query
      .then(() => {
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
      <DialogTitle>{props.id ? "Update" : "Create"} Item</DialogTitle>
      <StyledDialogContent>
        {formAlert && (
          <Box mb={4}>
            <Alert severity={formAlert.type}>{formAlert.message}</Alert>
          </Box>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="Name"
                name="name"
                defaultValue={itemData && itemData.name}
                error={Boolean(errors.name)}
                helperText={errors.name && errors.name.message}
                fullWidth
                autoFocus
                inputRef={register({
                  required: "Please enter a name",
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
              >
                {!pending ? "Save" : <CircularProgress size={28} />}
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledDialogContent>
    </Dialog>
  );
}

export default EditItemModal;
