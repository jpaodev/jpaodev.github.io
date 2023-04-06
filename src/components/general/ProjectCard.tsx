import React from "react";
import {
  Stack,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Divider,
  Grid,
  useTheme,
} from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";
import InfoModal from "./InfoModal";

interface Props extends WithTranslation {
  img: string;
  alt: string;
  name: string;
  description: string;
  technologies?: Array<string>;
  modalText?: string;
  link: string;
  tags?: Array<string>;
}

const ProjectCard: React.FC<Props> = ({
  t,
  img,
  alt,
  name,
  description,
  modalText,
  link,
  technologies,
  tags,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  function toggleModal() {
    open ? setOpen(false) : setOpen(true);
  }
  const loadBlogpost = (link: string) => {
    window.location.href = `${window.location.href}/${link}`;
  };

  const handleCardClick = () => {
    tags ? loadBlogpost(link) : toggleModal();
  };
  const theme = useTheme();
  const imgLink = t(img) ? t(img) : "";
  return (
    <>
      <Box margin={3}>
        <Stack spacing={2}>
          <Card
            sx={{
              maxWidth: 345,
              ":hover": { boxShadow: 20, cursor: "pointer" },
            }}
            onClick={handleCardClick}
          >
            <CardMedia sx={{ height: 140 }} image={imgLink} title={alt} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ ":hover": { textDecoration: "underline" } }}
              >
                {t(name)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t(description)}
              </Typography>
            </CardContent>
            <CardActions>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1}>
                  {tags &&
                    tags.map((tag) => (
                      <Grid item xs={6} key={tag}>
                        <Chip label={tag} variant="outlined" />
                      </Grid>
                    ))}
                </Stack>
                <Stack direction="row"></Stack>
              </Stack>
            </CardActions>
          </Card>

          {modalText && (
            <InfoModal
              open={open}
              toggleModal={toggleModal}
              name={name}
              description={description}
              technologies={technologies}
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default withTranslation()(ProjectCard);
