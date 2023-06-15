import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const Home = () => {
  const { services, isLoading } = useSelector((state) => state.service);
  const { portfolio, isLoading: isloading } = useSelector(
    (state) => state.portfolio
  );
  const [scrollY, setScrollY] = useState(0);

  const plans = services && services[0] && services[0].plans;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageAnimation>
      <Box>
        <Helmet>
          <title>Home page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Home page page of Kaaeotech Solutions."
          />
        </Helmet>
        {scrollY >= 250 && isLoading && isloading && (
          <Box>
            <FetchComponent
              fetchFunction={GetServiceData()}
              loading={isLoading}
            />
            <FetchComponent
              fetchFunction={GetPortfolioData()}
              loading={isloading}
            />
          </Box>
        )}

        <Hero isLoad={!isLoading && !isloading} />
        <Pricing slice={plans && 4} data={plans} />
        <AboutHero />
        <ServiceDetail link="service" service={services && services} />
        <ContactHero isHome={true} />
        <PortfolioHero portfolio={portfolio} slice={3} />
      </Box>
    </PageAnimation>
  );
};

export default Home;
