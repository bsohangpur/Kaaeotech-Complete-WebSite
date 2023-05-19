import { Box } from "@chakra-ui/react";
import React from "react";
import { AboutHero, Hero } from "../components";
import { ContactHero, PortfolioHero, Pricing, ServiceDetail } from "../containers";
import { pricingData } from "../data";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Pricing slice={4} data={pricingData}/>
      <AboutHero />
      <ServiceDetail link='service'/>
      <ContactHero />
      <PortfolioHero slice={3}/>
    </Box>
  );
};

export default Home;
