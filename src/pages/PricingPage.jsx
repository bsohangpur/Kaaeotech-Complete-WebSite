import React from "react";
import { Box } from "@chakra-ui/react";
import { Pricing } from "../containers";
import { Heading } from "../constants";
import { useSelector } from "react-redux";
import { FetchComponent } from "../utils";
import { GetServiceData } from "../redux/slices/serviceSlice";

const PricingPage = () => {
  const { services, isLoading } = useSelector((state) => state.service);
  const plans = services && services[0] && services[0].plans;

  return (
    <Box className=" my-8">
      <FetchComponent fetchFunction={GetServiceData()} loading={isLoading} />
      <Heading title="our pricing" />
      <Pricing data={!isLoading ? plans : []} />
    </Box>
  );
};

export default PricingPage;
