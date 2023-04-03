import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Typography, Container, Grid } from "@mui/material";
import ProfileArea from "../components/home/ProfileArea";
import Skills from "../components/home/Skills";
import ExperienceArea from "../components/home/ExperienceArea";
import AboutMeMain from "../components/home/AboutMeMain";
import Projects from "../components/home/Projects";

interface HomeProps extends WithTranslation {}

const MyComponent: React.FC<HomeProps> = ({ t }) => {
  return (
    <>
      <Container sx={{ mt: 5, ml: 1, mr: 1 }}>
        <ProfileArea />
      </Container>

      <Container sx={{ mt: 2 }} />
      <AboutMeMain />
      <Container sx={{ mt: 2 }} />

      <Grid container spacing={0} direction="column" alignItems="center">
        <section style={{ backgroundColor: "#571E4B" }}>
          <Typography variant="h4" align="center" sx={{ mt: 2 }}></Typography>
          <Skills />
        </section>
        <Container sx={{ mt: 6 }} />

        <ExperienceArea />

        <Container sx={{ mt: 6 }} />
      </Grid>
      <section style={{ backgroundColor: "#571E4B" }}>
        <Projects />
      </section>
    </>
  );
};

export default withTranslation()(MyComponent);
