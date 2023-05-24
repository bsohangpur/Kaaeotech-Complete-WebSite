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

  useEffect(() => {
    dispatch(GetTeamData());
  }, []);

  const management = team && team.filter((team)=>team.tag.name === 'Management')
  const _team = team && team.filter((team)=>team.tag.name === 'Team')

  return (
    <Box>
      <AboutHero />
      <AboutWhoWeAre />
      <Team person={management} title="Management" />
      <Team person={_team} title="Team" />
      <Testimonial />
    </Box>
  );
};

export default About;
