import React from "react";
import {
  Stack,
  Typography,
  Box,
  Modal,
  Divider,
  useTheme,
} from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

interface Props extends WithTranslation {
  open: any;
  toggleModal: any;
  name: string;
  description: string;
  technologies?: Array<string>;
  modalText?: string;
  isMarkdown?: boolean;
}

const InfoModal: React.FC<Props> = ({
  t,
  open,
  toggleModal,
  name,
  description,
  technologies,
  modalText,
  isMarkdown,
}) => {
  const theme = useTheme();

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "70% !important",
    },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  return (
    <Modal
      open={open}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography variant="h5">{t(name)}</Typography>
        {isMarkdown ? (
          <ReactMarkdown>{description}</ReactMarkdown>
        ) : (
          <Typography variant="body1">{t(description)}</Typography>
        )}
        {modalText && <Typography variant="body2">{t(modalText)}</Typography>}
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Stack spacing={2}>
          <Typography variant="body2">
            {t("general.modal.usedTechnologies")}
          </Typography>
          <Stack direction={"row"} spacing={1} sx={{ overflow: "auto" }}>
            {technologies &&
              technologies.map((value) => (
                <Box
                  key={t(`skills.${value}.name`)}
                  component="img"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                  alt={t(`${value}`)}
                  src={t(`skills.${value}.icon`)}
                />
              ))}
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
export default withTranslation()(InfoModal);
