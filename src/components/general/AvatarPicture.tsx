import React from "react";
import { Avatar } from "@mui/material";

type Props = {
  size: number;
};

export default function AvatarPicture({ size }: Props) {
  return (
    <Avatar
      alt="jpaodev Picture"
      src={"assets/img/jpaodev-picture.png"}
      sx={{
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
