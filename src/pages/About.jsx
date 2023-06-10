import React from "react";
import { Box } from "@chakra-ui/react";
import { AboutHero, AboutWhoWeAre } from "../components";
import { Team, Testimonial } from "../containers";
import { useSelector } from "react-redux";
import { GetTeamData } from "../redux/slices/teamSlice";
import { GetTestimonialData } from "../redux/slices/testimonialSlice";
import { FetchComponent } from "../utils";

const About = () => {
  const { team, isLoading } = useSelector((state) => state.team);
  const { testimonial, isLoading: isloading } = useSelector(
    (state) => state.testimonial
  );

  const management =
    team && team.filter((team) => team.tag.name === "Management");
  const _team = team && team.filter((team) => team.tag.name === "Team");

  return (
    <Box>
      <FetchComponent fetchFunction={GetTeamData()} loading={isLoading} />
      <FetchComponent fetchFunction={GetTestimonialData()} loading={isloading} />
      <AboutHero />
      <AboutWhoWeAre />
      <Team person={management} title="Management" />
      <Team person={_team} title="Team" />
      <Testimonial testimonials={testimonial && testimonial} />
    </Box>
  );
};

export default About;
