import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { faqData } from "../data";
import { FAQCard } from "../components";

const FAQSection = () => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Box maxW="7xl" px={{ base: 6, md: 10 }} mt={10} mb={20}>
      <Box className="mb-8 flex gap-2 items-center w-full flex-col">
        <Heading as="h2" size="lg" className=" font-bold ">
          Useful Information
        </Heading>
        <Divider w={150} />
      </Box>
      <Flex flexWrap="wrap" gap={12} justify="center" align="center">
        <motion.div className="w-full md:w-[90%]" whileHover={{ scale: 1.01 }}>
          <Box bg={bg} p={4} borderRadius="lg" boxShadow="md">
            <Heading
              as="h3"
              size={{ base: "md", md: "lg" }}
              mt={4}
              mb={2}
              fontWeight="bold"
            >
              Frequently asked questions
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              Get answers to some of the most commonly asked questions about our
              services and policies.
            </Text>
            {faqData.map((value) => {
              return <FAQCard key={value.id} que={value.que} ans={value.ans} />;
            })}
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default FAQSection;
