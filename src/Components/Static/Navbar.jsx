import * as React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "./SideBar";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { slide as Mmenu } from "react-burger-menu";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
  useProSidebar,
  SidebarHeader,
} from "react-pro-sidebar";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link } from "@mui/material";
import SideBar from "./SideBar2";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [show, setShow] = useState(false);
  const showSettings = (event) => {
    event.preventDefault();
  };
  
  // const buttonText = show ? "Hide Component" : "Show Component";
  function toggleShow() {
    setShow(true);
  }
  console.log(show, "-----");
  const isMenuOpen = (state) => {
    console.log(state.isOpen, "hello");
    if (state.isOpen) {
      setShow(false);
    }
  };
  // const showSettings =(event)=> {
  //   event.preventDefault();
  // }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 1, mt: 2 }}
            >
              <MenuIcon onClick={toggleShow} style={{ color: "white" }} />
            </IconButton>
            <Typography
              variant="h5"
              // size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 1, mt: 2 }}
            >
              <MDBNavbarLink
                active
                aria-current="page"
                href="/"
                style={{ color: "white" }}
              >
                Home
              </MDBNavbarLink>
            </Typography>
            <Typography
              variant="h8"
              // size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              active
              sx={{ mr: 1, mt: 2 }}
              href="/about"
            >
              <MDBNavbarLink
                active
                aria-current="page"
                href="/about"
                style={{ color: "white" }}
              >
                About Us
              </MDBNavbarLink>
            </Typography>
            <Typography
              variant="h8"
              // size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              active
              sx={{ mr: 1, mt: 2 }}
              href="/contact"
            >
              <MDBNavbarLink
                active
                aria-current="page"
                href="/contact"
                style={{ color: "white" }}
              >
                Contact Us
              </MDBNavbarLink>
            </Typography>
            <Typography
              variant="h8"
              // size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              active
              sx={{ mr: 2, mt: 2 }}
            >
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link"
                  role="button"
                  style={{ color: "white" }}
                >
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {" "}
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      {show && (
        <Mmenu width={"17%"} onStateChange={isMenuOpen} isOpen={true}>
          <SideBar />
        </Mmenu>
      )}
    </>
  );
}
