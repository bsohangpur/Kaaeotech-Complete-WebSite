import { Box } from "@chakra-ui/react";
import React from "react";
import { AboutHero, Hero } from "../components";
import { ContactHero, PortfolioHero, Pricing } from "../containers";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Pricing slice={4}/>
      <AboutHero />
      <ContactHero />
      <PortfolioHero slice={3}/>
    </Box>
  );
};

export default Home;
