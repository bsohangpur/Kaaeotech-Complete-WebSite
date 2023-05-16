import React from "react";
import { Box } from "@chakra-ui/react";
import { AboutHero, AboutWhoWeAre } from "../components";
import { Team, Testimonial } from "../containers";
import { Team as team, Management } from "../data";

const About = () => {
  return (
    <Box>
      <AboutHero />
      <AboutWhoWeAre />
      <Team person={Management} title="Management" />
      <Team person={team} title="Team" />
      <Testimonial />
    </Box>
  );
};

export default About;
