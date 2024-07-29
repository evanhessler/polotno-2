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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  const handleOpenMenu = (event, id) => {
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to="/">
              <Logo src={props.logo} alt="Logo" />
            </Link>
            <Spacer />
            <Hidden smUp>
              <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              {!auth.user && (
                <Button component={Link} to="/auth/signin" color="inherit">
                  Sign in
                </Button>
              )}

              {auth.user && (
                <>
                  <Button
                    color="inherit"
                    aria-label="Account"
                    aria-controls="account-menu"
                    aria-haspopup="true"
                    onClick={(event) => handleOpenMenu(event, "account-menu")}
                  >
                    Account
                    <ExpandMoreIcon />
                  </Button>
                  <Menu
                    id="account-menu"
                    open={menuState && menuState.id === "account-menu"}
                    anchorEl={menuState && menuState.anchor}
                    getContentAnchorEl={undefined}
                    onClick={handleCloseMenu}
                    onClose={handleCloseMenu}
                    keepMounted
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <MenuItem component={Link} to="/dashboard">
                      Dashboard
                    </MenuItem>
                    <MenuItem component={Link} to="/settings/general">
                      Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => auth.signout()}>Signout</MenuItem>
                  </Menu>
                </>
              )}
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerList onClick={() => setDrawerOpen(false)}>
          {!auth.user && (
            <ListItem component={Link} to="/auth/signin" button>
              <ListItemText>Sign in</ListItemText>
            </ListItem>
          )}

          {auth.user && (
            <>
              <ListItem component={Link} to="/dashboard" button>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
              <ListItem component={Link} to="/settings/general" button>
                <ListItemText>Settings</ListItemText>
              </ListItem>
              <Divider />
              <ListItem button onClick={() => auth.signout()}>
                <ListItemText>Sign out</ListItemText>
              </ListItem>
            </>
          )}
        </DrawerList>
      </Drawer>
    </Section>
  );
}

export default Navbar;
