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
import { IExperienceInfo } from "../../interfaces/IDataModels";
import SkillCard from "../general/SkillCard";
import PictureWithText from "../general/PictureWithText";

interface Props extends WithTranslation {}

const ExperienceArea: React.FC<Props> = ({ t }) => {
  const theme = useTheme();
  const field = "experience";
  const all_experiences: { [key: string]: IExperienceInfo } =
    english_translations[field];
  return (
    <React.Fragment key={"Experience"}>
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
        id="Experience"
      >
        {Object.keys(all_experiences).map((key) => (
          <Grid item xs={12} sm={6} md={3} key={`${field}.${key}.id`}>
            <PictureWithText
              key={`${field}.${key}.name`}
              img={`${field}.${key}.icon`}
              alt={`${field}.${key}.name`}
              name={`${field}.${key}.name`}
              description={`${field}.${key}.job_title`}
              modalText={`${field}.${key}.description`}
              technologies={all_experiences[key].technologies}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default withTranslation()(ExperienceArea);
