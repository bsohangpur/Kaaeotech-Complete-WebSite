import { Box, Heading as H3, Divider } from "@chakra-ui/react";
import React from "react";

const Heading = ({ title }) => {
  return (
    <Box className=" flex items-center flex-col gap-2">
      <H3 as="h3" textTransform='capitalize' size="lg">
        {title}
      </H3>
      <Divider w={150} />
    </Box>
  );
};

export default Heading;
