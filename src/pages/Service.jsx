import React from "react";
import { Box } from "@chakra-ui/react";
import { FAQSection, ServiceDetail, ServiceHero } from "../containers";

const Service = () => {
  return (
    <Box>
      <ServiceHero />
      <ServiceDetail />
      <FAQSection />
    </Box>
  );
};

export default Service;
