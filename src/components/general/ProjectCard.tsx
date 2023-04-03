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

const PictureWithText: React.FC<Props> = ({
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
  const theme = useTheme();
  const imgLink = t(img) ? t(img) : "";
  return (
    <>
      <Box margin={3}>
        <Stack spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={imgLink} title={alt} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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
                      <Grid item xs={6}>
                        <Chip key={tag} label={tag} variant="outlined" />
                      </Grid>
                    ))}
                </Stack>
                <Stack direction="row">
                  {tags ? (
                    <Button size="small" href={t(link)}>
                      Read
                    </Button>
                  ) : (
                    <Button size="small" onClick={toggleModal}>
                      Learn More
                    </Button>
                  )}
                </Stack>
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

export default withTranslation()(PictureWithText);
