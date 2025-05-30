import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../../assets/img/logo/logo_min.svg";

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
      width: "15ch",
      "&:focus": {
        width: "23ch",
      },
    },
  },
}));

export const StyledLogo = styled("img")(() => ({
  maxWidth: 100,
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ textDecoration: "none", display: "grid" }}
          >
            <Box
              component="img"
              src={logo}
              alt=""
              height="72px"
              sx={{ maxWidth: "100px" }}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          />
          <Search sx={{ visibility: "hidden" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="EJ: Hyundai i10"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
