import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { CareerForm } from "../containers";

const Career = () => {
  return (
    <Box p={4}>
      <Box className="flex flex-col items-center mt-5">
        <Heading as="h1" mb={4}>
          Join Us
        </Heading>
        <CareerForm />
      </Box>
    </Box>
  );
};

export default Career;
