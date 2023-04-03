import React from "react";
import { Stack, Typography, Container } from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";
import "./Footer.css";

interface Props extends WithTranslation {}

const Footer: React.FC<Props> = ({ t }) => {
  return (
    <Container sx={{ p: 1 }}>
      <Stack
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <a href="/#/imprint">
          <Typography variant="body1">{t("footer.imprint")}</Typography>
        </a>
        <Typography variant="body1">Made with 💚 by pao</Typography>
        <a href="/#/privacy">
          <Typography variant="body1">{t("footer.privacy")}</Typography>
        </a>
      </Stack>
    </Container>
  );
};

export default withTranslation()(Footer);
