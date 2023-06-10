import React from "react";
import { Box } from "@chakra-ui/react";
import { FAQSection, ServiceDetail, ServiceHero } from "../containers";
import { useSelector } from "react-redux";
import { FetchComponent } from "../utils";
import { GetServiceData } from "../redux/slices/serviceSlice";

const Service = () => {
  const { services, isLoading } = useSelector((state) => state.service);

  return (
    <Box>
      <FetchComponent fetchFunction={GetServiceData()} loading={isLoading} />
      <ServiceHero />
      <ServiceDetail service={services && services} />
      <FAQSection />
    </Box>
  );
};

export default Service;
