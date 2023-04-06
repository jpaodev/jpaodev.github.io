import { MenuItem } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

type Props = {
  darkmode: boolean;
  setDarkmode: any;
};
export default function DarkmodeToggle({ darkmode, setDarkmode }: Props) {
  const toggleDarkmode = () => {
    darkmode ? setDarkmode(false) : setDarkmode(true);
  }
  return (
    <MenuItem onClick={toggleDarkmode}>
      {darkmode ? (
        <
        >
          <LightModeIcon color="secondary" />
        </>
      ) : (
        <
        >
          <DarkModeIcon color="secondary" />
        </>
      )}
    </MenuItem>
  );
}
