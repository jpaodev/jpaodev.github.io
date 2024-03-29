import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DarkmodeToggle from "./general/DarkmodeToggle";
import { MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { downloadCV } from "../utilities/download";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const pages = ["Home", "Blog", "CV"];
const textStyles = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "arial",
  fontWeight: 700,
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
};
const textStylesSmall = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "arial",
  fontWeight: 700,
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
};

interface Props {
  darkmode: boolean;
  setDarkmode: any;
}

function ResponsiveAppBar(props: Props) {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const switchLanguage = () => {
    const targetLang = i18n.language == "en" ? "de" : "en";
    i18n.changeLanguage(targetLang);
    // localStorage.setItem("lang", targetLang);
  };

  const handleCloseNavMenu = (page: string) => {
    let pageName: string = page;
    if (pages.includes(pageName)) {
      if (pageName == "CV") {
        downloadCV();
      } else if (pageName == "Blog") {
        window.location.href = "/#/blog";
      } else {
        // Default nav link to home - anchor tags removed for now.
        window.location.href = "../#/home";
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView();
        }
      }
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={textStyles}
          >
            jpaodev
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

              <MenuItem onClick={() => switchLanguage()}>
                <img
                  className="dropdown-menu-end "
                  src={
                    i18n.language == "en"
                      ? "assets/img/flag-germany.svg"
                      : "assets/img/flag-england.svg"
                  }
                  style={{ height: 20 }}
                />
              </MenuItem>
              <DarkmodeToggle
                darkmode={props.darkmode}
                setDarkmode={props.setDarkmode}
              />
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={textStylesSmall}
          >
            jpaodev
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}

            <Button onClick={() => switchLanguage()}>
              <img
                className="dropdown-menu-end "
                src={
                  i18n.language == "en"
                    ? "assets/img/flag-germany.svg"
                    : "assets/img/flag-england.svg"
                }
                style={{ height: 20 }}
              />
            </Button>
            <DarkmodeToggle
              darkmode={props.darkmode}
              setDarkmode={props.setDarkmode}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
