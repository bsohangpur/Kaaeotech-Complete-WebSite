import React from "react";
import { Box } from "@chakra-ui/react";
import { Pricing } from "../containers";
import { Heading } from "../constants";
import { pricingData } from "../data";
import { useSelector } from "react-redux";

const PricingPage = () => {
  const { services, isLoading } = useSelector((state) => state.service);

  const plans = services && services[0] && services[0].plans;

  console.log(services);

  return (
    <Box className=" my-8">
      <Heading title="our pricing" />
      <Pricing data={!isLoading && plans} />
    </Box>
  );
};

export default PricingPage;
