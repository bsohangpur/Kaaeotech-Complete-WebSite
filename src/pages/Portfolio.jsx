import React from "react";
import { Box } from "@chakra-ui/react";
import { PortfolioHero } from "../containers";
import { FetchComponent } from "../utils";
import { useSelector } from "react-redux";
import { GetPortfolioData } from "../redux/slices/portfolioSlice";

const Portfolio = () => {
  const { portfolio, isLoading } = useSelector((state) => state.portfolio);

  return (
    <Box>
      <FetchComponent fetchFunction={GetPortfolioData()} loading={isLoading} />
      <PortfolioHero portfolio={portfolio} />
    </Box>
  );
};

export default Portfolio;
