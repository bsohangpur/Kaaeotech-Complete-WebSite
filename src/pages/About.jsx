import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { AboutHero, AboutWhoWeAre } from "../components";
import { Team, Testimonial } from "../containers";
// import { Team as team, Management } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { GetTeamData } from "../redux/slices/teamSlice";

const About = () => {
  const dispatch = useDispatch();
  const { team } = useSelector((state) => state.team);
  const { testimonial } = useSelector((state) => state.testimonial);

  useEffect(() => {
    dispatch(GetTeamData());
  }, []);

  const management =
    team && team.filter((team) => team.tag.name === "Management");
  const _team = team && team.filter((team) => team.tag.name === "Team");

  console.log(testimonial)

  return (
    <Box>
      <AboutHero />
      <AboutWhoWeAre />
      <Team person={management} title="Management" />
      <Team person={_team} title="Team" />
      <Testimonial testimonials={testimonial && testimonial} />
    </Box>
  );
};

export default About;
