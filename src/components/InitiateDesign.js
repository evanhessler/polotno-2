import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
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
} from "@mui/material";
import { FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbSwitch2 } from "react-icons/tb";

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

const InformationForm = () => {
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
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={toggleSecondPerson}
          startIcon={showSecondPerson ? <FaUser /> : <BsPeopleFill />}
        >
          {showSecondPerson ? "Hide Second Person" : "Show Second Person"}
        </Button>
        <Button
          onClick={swapPersons}
          disabled={!showSecondPerson}
          startIcon={<TbSwitch2 />}
        >
          Swap People
        </Button>
      </Box>
      <FormControl fullWidth margin="normal">
        <Typography variant="h6" sx={{ mt: 2 }}>
          Relgious Affiliations
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
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Design
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Create Design</DialogTitle>
        <DialogContent>
          <InformationForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateDesignButton;
