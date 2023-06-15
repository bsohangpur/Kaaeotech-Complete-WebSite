import React from "react";
import { Box } from "@chakra-ui/react";
import { PortfolioHero } from "../containers";
import { FetchComponent } from "../utils";
import { useSelector } from "react-redux";
import { GetPortfolioData } from "../redux/slices/portfolioSlice";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const Portfolio = () => {
  const { portfolio, isLoading } = useSelector((state) => state.portfolio);

  return (
    <PageAnimation>
      <Box>
        <Helmet>
          <title>Portfolio page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Portfolio page page of Kaaeotech Solutions."
          />
        </Helmet>
        <FetchComponent
          fetchFunction={GetPortfolioData()}
          loading={isLoading}
        />
        <PortfolioHero portfolio={portfolio} />
      </Box>
    </PageAnimation>
  );
};

export default Portfolio;
