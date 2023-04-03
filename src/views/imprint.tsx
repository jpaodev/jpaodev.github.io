import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { IImprintInfo } from "../interfaces/IDataModels";
interface Props extends WithTranslation {}

const MyComponent: React.FC<Props> = ({ t }) => {
  const imprintText: IImprintInfo = {
    name: t("imprint.name"),
    address: t("imprint.address"),
    city: t("imprint.city"),
    email: t("imprint.email"),
    phone: t("imprint.phone"),
  };
  return (
    <Container sx={{ p: 5 }}>
      <Typography variant="h3">{t("imprint.heading")}</Typography>
      {Object.values(imprintText).map((key) => (
        <Typography variant="body1">{key}</Typography>
      ))}
    </Container>
  );
};

export default withTranslation()(MyComponent);
