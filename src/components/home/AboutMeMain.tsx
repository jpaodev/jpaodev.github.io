import React from "react";
import { Avatar, Stack, Typography, Box, CardContent } from "@mui/material";
import { withTranslation, WithTranslation } from "react-i18next";
import AvatarPicture from "../general/AvatarPicture";
import Grid from "@mui/material/Grid"; // Grid version 2
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./profile_icons.css";
import { socials } from "../../data/socials";
import ContentCard from "../general/ContentCard";
import { english_translations } from "../../data/english_translations";
import { IAboutMeInfo, IExperienceInfo } from "../../interfaces/IDataModels";
import SkillCard from "../general/SkillCard";
import PictureWithText from "../general/PictureWithText";

interface Props extends WithTranslation {}

const AboutMeMain: React.FC<Props> = ({ t }) => {
  const theme = useTheme();
  const field = "about-me";
  const all_about_mes: { [key: string]: IAboutMeInfo } =
    english_translations[field];
  return (
    <>
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
      >
        {Object.keys(all_about_mes).map((key) => (
          <Grid item xs={12} sm={6} md={3} key={`${field}.${key}.id`}>
            <PictureWithText
              key={`${field}.${key}.name`}
              img={`${field}.${key}.icon`}
              alt={`${field}.${key}.name`}
              name={`${field}.${key}.name`}
              description={`${field}.${key}.description`}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default withTranslation()(AboutMeMain);
