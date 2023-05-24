import React from "react";
import { Box } from "@chakra-ui/react";
import { FAQSection, ServiceDetail, ServiceHero } from "../containers";
import { useSelector } from "react-redux";

const Service = () => {
  const { services } = useSelector((state) => state.service);

  return (
    <Box>
      <ServiceHero />
      <ServiceDetail service={services && services} />
      <FAQSection />
    </Box>
  );
};

export default Service;
