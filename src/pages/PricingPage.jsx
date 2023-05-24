import React from "react";
import { Box } from "@chakra-ui/react";
import { Pricing } from "../containers";
import { Heading } from "../constants";
import { pricingData } from "../data";
import { useSelector } from "react-redux";

const PricingPage = () => {
  const { service } = useSelector((state) => state.service);

  const plans = service && service[0] && service[0].plans

  return (
    <Box className=" my-8">
      <Heading title='our pricing'/>
      <Pricing data={plans}/>
    </Box>
  );
};

export default PricingPage;
