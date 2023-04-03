import React from "react";
import {
  Avatar,
  Stack,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";
import InfoModal from "./InfoModal";

interface Props extends WithTranslation {
  img: string;
  alt: string;
  name: string;
  description: string;
  modalText?: string;
  technologies?: Array<string>;
}

const PictureWithText: React.FC<Props> = ({
  t,
  img,
  alt,
  name,
  description,
  modalText,
  technologies,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  function toggleModal() {
    open ? setOpen(false) : setOpen(true);
  }
  const theme = useTheme();
  const imgLink = t(img) ? t(img) : "";
  return (
    <>
      <Box margin={3}>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt={alt}
              src={imgLink}
              sx={{
                width: 150,
                height: 150,
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={toggleModal}
            />
          </Box>
          <Typography variant="h4" textAlign={"center"}>
            {t(name)}
          </Typography>
          <Typography variant="h6" textAlign={"center"}>
            {t(description)}
          </Typography>
          {modalText && (
            <InfoModal
              open={open}
              toggleModal={toggleModal}
              name={name}
              description={description}
              modalText={modalText}
              technologies={technologies}
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default withTranslation()(PictureWithText);