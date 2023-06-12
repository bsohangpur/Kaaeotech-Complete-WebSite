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
import { FetchComponent } from "../utils";
import { GetServiceData } from "../redux/slices/serviceSlice";
import { GetPortfolioData } from "../redux/slices/portfolioSlice";

const Home = () => {
  const { services, isLoading } = useSelector((state) => state.service);
  const { portfolio, isLoading: isloading } = useSelector(
    (state) => state.portfolio
  );

  const plans = services && services[0] && services[0].plans;

  return (
    <Box>
      <FetchComponent fetchFunction={GetServiceData()} loading={isLoading} />
      <FetchComponent fetchFunction={GetPortfolioData()} loading={isloading} />
      <Hero />
      <Pricing slice={plans && 4} data={plans} />
      <AboutHero />
      <ServiceDetail link="service" service={services && services} />
      <ContactHero isHome={true} />
      <PortfolioHero portfolio={portfolio} slice={3} />
    </Box>
  );
};

export default Home;
