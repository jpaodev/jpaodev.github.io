import React from "react";
import PrivacyStatement from "../components/general/PrivacyStatement";
import { Container } from "@mui/material";

type Props = {};

export default function privacy({}: Props) {
  return (
    <Container sx={{ p: 5 }}>
      <PrivacyStatement />
    </Container>
  );
}
