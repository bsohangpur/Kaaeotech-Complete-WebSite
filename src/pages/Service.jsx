import React from "react";
import { Box } from "@chakra-ui/react";
import { ServiceDetail, ServiceHero } from "../containers";



const Service = () => {
  return (
    <Box>
      <ServiceHero />
      <ServiceDetail/>
    </Box>
  );
};

export default Service;
