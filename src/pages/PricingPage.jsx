import React from "react";
import { Box } from "@chakra-ui/react";
import { Pricing } from "../containers";
import { Heading } from "../constants";
import { pricingData } from "../data";

const PricingPage = () => {
  return (
    <Box className=" my-8">
      <Heading title='our pricing'/>
      <Pricing data={pricingData}/>
    </Box>
  );
};

export default PricingPage;
