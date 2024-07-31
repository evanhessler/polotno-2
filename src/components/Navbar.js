import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";
import { Button as BlueprintButton } from "@blueprintjs/core";
import { useLocation } from "react-router-dom"; // Add this import

const Logo = styled("img")(({ theme }) => ({
  height: 28,
  marginRight: theme.spacing(2),
}));

const DrawerList = styled(List)(({ theme }) => ({
  width: 250,
}));

const Spacer = styled("div")({
  flexGrow: 1,
});

function Navbar(props) {
  const auth = useAuth();
  const location = useLocation(); // Add this line
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  const handleOpenMenu = (event, id) => {
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  const isEditorPage = location.pathname.startsWith("/design"); // Add this line

  return (
    <Section sx={{ background: "#fff" }} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container
          disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
          }}
        >
          <Toolbar sx={{ flex: 1 }}>
            <Link to="/">
              <Logo src={props.logo} alt="Logo" />
            </Link>
          </Toolbar>
          {isEditorPage && ( // Modify this line
            <Toolbar>
              <Hidden smUp>
                <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown>
                <Box sx={{ mr: -9 }}>
                  <BlueprintButton
                    icon="floppy-disk"
                    intent="none"
                    onClick={() => alert("Design Saved")}
                    style={{
                      marginLeft: "10px",
                      color: "#1C2127",
                      border: "none",
                      borderRadius: "3px",
                      boxShadow: "none",
                    }}
                    className="custom-button"
                  >
                    Save
                  </BlueprintButton>
                  <BlueprintButton
                    intent="primary"
                    onClick={() => alert("Design Approved")}
                    style={{ marginLeft: "10px" }}
                  >
                    Finalize Design
                  </BlueprintButton>
                </Box>
              </Hidden>
            </Toolbar>
          )}
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerList onClick={() => setDrawerOpen(false)}>
          {isEditorPage && ( // Modify this line
            <Box sx={{ mr: -4 }}>
              <BlueprintButton
                icon="floppy-disk"
                intent="none"
                onClick={() => alert("Design Saved")}
                style={{
                  marginLeft: "10px",
                  color: "#1C2127",
                  border: "none",
                  borderRadius: "3px",
                  boxShadow: "none",
                }}
                className="custom-button"
              >
                Save
              </BlueprintButton>
              <BlueprintButton
                intent="primary"
                onClick={() => alert("Design Approved")}
                style={{ marginLeft: "10px" }}
              >
                Finalize Design
              </BlueprintButton>
            </Box>
          )}
        </DrawerList>
      </Drawer>
    </Section>
  );
}

export default Navbar;
