import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { CareerForm } from "../containers";
import PageAnimation from "./PageAnimation";

const Career = () => {
  return (
    <PageAnimation>
      <Box
        p={4}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Box className="flex flex-col items-center mt-5">
          <Heading as="h1" mb={4}>
            Join Us
          </Heading>
          <CareerForm />
        </Box>
      </Box>
    </PageAnimation>
  );
};

export default Career;
