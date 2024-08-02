import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  Chip,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  ListItemText,
  Checkbox,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbSwitch2 } from "react-icons/tb";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { createDesign } from "../util/db";
import { useAuth } from "./../util/auth.js";

const religions = [
  "Christianity",
  "Islam",
  "Hinduism",
  "Buddhism",
  "Sikhism",
  "Judaism",
  "No Religion",
  "Other",
];

const InformationForm = ({
  person1,
  setPerson1,
  person2,
  setPerson2,
  religionsSelected,
  setReligionsSelected,
  showSecondPerson,
  setShowSecondPerson,
}) => {
  const handleInputChange = (person, setPerson, field, value) => {
    setPerson({
      ...person,
      [field]: value,
    });
  };

  const handleReligionChange = (event) => {
    const {
      target: { value },
    } = event;
    setReligionsSelected(typeof value === "string" ? value.split(",") : value);
  };

  const swapPersons = () => {
    const temp = { ...person1 };
    setPerson1(person2);
    setPerson2(temp);
  };

  const toggleSecondPerson = () => {
    setShowSecondPerson(!showSecondPerson);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth margin="normal">
        <Typography variant="h6" sx={{ mt: 2 }}>
          Religious Affiliations
        </Typography>
        <Select
          multiple
          value={religionsSelected}
          onChange={handleReligionChange}
          input={<OutlinedInput label="Religions" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {religions.map((religion) => (
            <MenuItem key={religion} value={religion}>
              <Checkbox checked={religionsSelected.indexOf(religion) > -1} />
              <ListItemText primary={religion} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-start" }}>
        <Button
          onClick={toggleSecondPerson}
          startIcon={showSecondPerson ? <FaUser /> : <BsPeopleFill />}
        >
          {showSecondPerson ? "Hide Second Person" : "Add Second Person"}
        </Button>
        <Button
          onClick={swapPersons}
          disabled={!showSecondPerson}
          startIcon={<TbSwitch2 />}
        >
          Swap People
        </Button>
      </Box>

      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Person 1
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="First Name"
            value={person1.firstName}
            onChange={(e) =>
              handleInputChange(
                person1,
                setPerson1,
                "firstName",
                e.target.value
              )
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Middle Name"
            value={person1.middleName}
            onChange={(e) =>
              handleInputChange(
                person1,
                setPerson1,
                "middleName",
                e.target.value
              )
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Last Name"
            value={person1.lastName}
            onChange={(e) =>
              handleInputChange(person1, setPerson1, "lastName", e.target.value)
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date of Birth"
            type="date"
            value={person1.dob}
            onChange={(e) =>
              handleInputChange(person1, setPerson1, "dob", e.target.value)
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date of Death"
            type="date"
            value={person1.dod}
            onChange={(e) =>
              handleInputChange(person1, setPerson1, "dod", e.target.value)
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      {showSecondPerson && (
        <>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Person 2
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="First Name"
                value={person2.firstName}
                onChange={(e) =>
                  handleInputChange(
                    person2,
                    setPerson2,
                    "firstName",
                    e.target.value
                  )
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Middle Name"
                value={person2.middleName}
                onChange={(e) =>
                  handleInputChange(
                    person2,
                    setPerson2,
                    "middleName",
                    e.target.value
                  )
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Last Name"
                value={person2.lastName}
                onChange={(e) =>
                  handleInputChange(
                    person2,
                    setPerson2,
                    "lastName",
                    e.target.value
                  )
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                type="date"
                value={person2.dob}
                onChange={(e) =>
                  handleInputChange(person2, setPerson2, "dob", e.target.value)
                }
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Death"
                type="date"
                value={person2.dod}
                onChange={(e) =>
                  handleInputChange(person2, setPerson2, "dod", e.target.value)
                }
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

const CreateDesignButton = () => {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [designLink, setDesignLink] = useState("");
  const [person1, setPerson1] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    dod: "",
  });
  const [person2, setPerson2] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    dod: "",
  });
  const [religionsSelected, setReligionsSelected] = useState([]);
  const [showSecondPerson, setShowSecondPerson] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setSaved(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    console.log("AUTH ", auth);
    try {
      const docId = await createDesign(
        {
          person1,
          person2,
          religionsSelected,
        },
        auth.user.id
      ); // Pass the user's UID as the owner
      setSaved(true);
      setDesignLink(`${window.location.origin}/design/${docId}`);
    } catch (error) {
      console.error("Error saving document: ", error);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(designLink);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Design
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <Typography variant="h5" sx={{ textAlign: "center", mt: 2 }}>
            {!saved
              ? "Create a New Design"
              : "Success! Here is a link to the designer."}
          </Typography>
          <IconButton
            onClick={handleClose}
            color="primary"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {!saved ? (
            <InformationForm
              person1={person1}
              setPerson1={setPerson1}
              person2={person2}
              setPerson2={setPerson2}
              religionsSelected={religionsSelected}
              setReligionsSelected={setReligionsSelected}
              showSecondPerson={showSecondPerson}
              setShowSecondPerson={setShowSecondPerson}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <TextField
                label="Design Link"
                value={designLink}
                fullWidth
                disabled
                InputProps={{
                  readOnly: true,
                }}
                sx={{ mr: 2, width: "calc(100% - 300px)" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCopyLink}
                sx={{ mr: 1 }}
              >
                Copy Link
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => window.open(designLink, "_blank")}
              >
                Go to Link
              </Button>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {!saved && (
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Link Copied to Clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateDesignButton;
