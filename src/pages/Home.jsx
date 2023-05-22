import { Box } from "@chakra-ui/react";
import React from "react";
import { AboutHero, Hero } from "../components";
import {
  ContactHero,
  PortfolioHero,
  Pricing,
  ServiceDetail,
} from "../containers";
import { pricingData } from "../data";
import { useSelector } from "react-redux";

const Home = () => {
  const { service } = useSelector((state) => state.service);

  const plans = service && service[0] && service[0].plans

  return (
    <Box>
      <Hero />
      <Pricing slice={plans && 4} data={plans} />
      <AboutHero />
      <ServiceDetail link="service" service={service && service} />
      <ContactHero />
      <PortfolioHero slice={3} />
    </Box>
  );
};

export default Home;
