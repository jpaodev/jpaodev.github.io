import React from "react";
import { Avatar, Stack, Typography, Box } from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";
import AvatarPicture from "../general/AvatarPicture";
import Grid from "@mui/material/Grid"; // Grid version 2
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./profile_icons.css";
import { socials } from "../../data/socials";

interface Props extends WithTranslation {}

const ProfileArea: React.FC<Props> = ({ t }) => {
  const theme = useTheme();
  return (
    <section id="Home">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" justifyContent="center">
            <AvatarPicture size={200} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack
            sx={{
              textAlign: "center",
              [theme.breakpoints.up("md")]: {
                textAlign: "left",
              },
            }}
          >
            <Typography variant="h2" gutterBottom fontFamily={"sans-serif"}>
              {t("main.whoami.heading")}
            </Typography>
            <Typography variant="h6" gutterBottom fontFamily={"sans-serif"}>
              {t("main.whoami.text")}
            </Typography>
            <Grid item>
              {socials.map((social) => {
                return (
                  <a href={social.link} key={social.name}>
                    <i
                      style={{ marginRight: 4, fontSize: 10 }}
                      className={"svg-icon " + social.icon}
                    />
                  </a>
                );
              })}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default withTranslation()(ProfileArea);
