import React from "react";
import { Box } from "@chakra-ui/react";
import { Pricing } from "../containers";
import { Heading } from "../constants";
import { useSelector } from "react-redux";
import { FetchComponent } from "../utils";
import { GetServiceData } from "../redux/slices/serviceSlice";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const PricingPage = () => {
  const { services, isLoading } = useSelector((state) => state.service);
  const plans = services && services[0] && services[0].plans;

  return (
    <PageAnimation>
      <Box className=" my-8">
        <Helmet>
          <title>Pricing page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Pricing page page of Kaaeotech Solutions."
          />
        </Helmet>
        <FetchComponent fetchFunction={GetServiceData()} loading={isLoading} />
        <Heading title="our pricing" />
        <Pricing data={!isLoading ? plans : []} />
      </Box>
    </PageAnimation>
  );
};

export default PricingPage;
