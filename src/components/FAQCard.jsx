import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const FAQCard = ({ que, ans }) => {
  const textColor = useColorModeValue("gray.600", "gray.50");

  return (
    <Box my={8}>
      <Heading as="h6" size="md">
        {que}
      </Heading>
      <Text fontSize="sm" textColor={textColor}>
        {ans}
      </Text>
    </Box>
  );
};

export default FAQCard