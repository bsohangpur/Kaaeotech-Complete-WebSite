import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { AboutHero, AboutWhoWeAre } from "../components";
import { Team, Testimonial } from "../containers";
import { useSelector } from "react-redux";
import { GetTeamData } from "../redux/slices/teamSlice";
import { GetTestimonialData } from "../redux/slices/testimonialSlice";
import { FetchComponent } from "../utils";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";


const About = () => {
  const { team, isLoading } = useSelector((state) => state.team);
  const { testimonial, isLoading: isloading } = useSelector(
    (state) => state.testimonial
  );

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const management =
    team && team.filter((team) => team.tag.name === "Management");
  const _team = team && team.filter((team) => team.tag.name === "Team");

  return (
    <PageAnimation>
      <Box>
        <Helmet>
          <title>About Us page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the About Us page page of Kaaeotech Solutions."
          />
        </Helmet>
        {scrollY >= 500 && isLoading && isloading && (
          <Box>
            <FetchComponent fetchFunction={GetTeamData()} loading={isLoading} />
            <FetchComponent
              fetchFunction={GetTestimonialData()}
              loading={isloading}
            />
          </Box>
        )}
        <AboutHero />
        <AboutWhoWeAre />
        <Team person={management} title="Management" />
        <Team person={_team} title="Team" />
        <Testimonial testimonials={testimonial && testimonial} />
      </Box>
    </PageAnimation>
  );
};

export default About;
