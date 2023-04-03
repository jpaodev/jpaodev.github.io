import { Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

type Props = {
  darkmode: boolean;
  setDarkmode: any;
};
export default function DarkmodeToggle({ darkmode, setDarkmode }: Props) {
  return (
    <MenuItem>
      {darkmode ? (
        <Button
          sx={{ justifyContent: "flex-start" }}
          onClick={() => {
            // localStorage.setItem("darkmode", "false");
            setDarkmode(false);
          }}
        >
          <LightModeIcon color="secondary" />
        </Button>
      ) : (
        <Button
          sx={{ justifyContent: "flex-start" }}
          onClick={() => {
            // localStorage.setItem("darkmode", "true");
            setDarkmode(true);
          }}
        >
          <DarkModeIcon color="secondary" />
        </Button>
      )}
    </MenuItem>
  );
}
