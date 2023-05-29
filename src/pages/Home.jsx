import { Box } from "@chakra-ui/react";
import React from "react";
import { AboutHero, Hero } from "../components";
import {
  ContactHero,
  PortfolioHero,
  Pricing,
  ServiceDetail,
} from "../containers";
import { useSelector } from "react-redux";

const Home = () => {
  const { services } = useSelector((state) => state.service);

  const plans = services && services[0] && services[0].plans;

  return (
    <Box>
      <Hero />
      <Pricing slice={plans && 4} data={plans} />
      <AboutHero />
      <ServiceDetail link="service" service={services && services} />
      <ContactHero />
      <PortfolioHero slice={3} />
    </Box>
  );
};

export default Home;
