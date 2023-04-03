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
import { ISkillInfo } from "../../interfaces/IDataModels";
import SkillCard from "../general/SkillCard";

interface Props extends WithTranslation {}

const Skills: React.FC<Props> = ({ t }) => {
  const theme = useTheme();
  const field = "skills";
  const all_skills: { [key: string]: ISkillInfo } = english_translations[field];
  return (
    <>
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
      >
        {Object.keys(all_skills).map((key) => (
            <Grid item xs={12} sm={6} md={3} key={`${field}.${key}.id`}>
              <SkillCard
                key={`${field}.${key}.id`}
                img={t(`${field}.${key}.icon`)}
                alt={t(`${field}.${key}.name`)}
                heading={t(`${field}.${key}.name`)}
                subheading={""}
                text={t(`${field}.${key}.notes`)}
              />
            </Grid>
        ))}
      </Grid>
    </>
  );
};

export default withTranslation()(Skills);
