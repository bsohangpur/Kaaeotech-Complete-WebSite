import { Box, Heading as H2, Divider } from "@chakra-ui/react";
import React from "react";

const Heading = ({ title }) => {
  return (
    <Box className=" flex items-center flex-col gap-2">
      <H2 as="h2" textTransform="capitalize" size="lg">
        {title}
      </H2>
      <Divider w={150} />
    </Box>
  );
};

export default Heading;
