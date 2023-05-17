import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ServiceHero = () => {
  return (
    <Flex
      bg="gray.50"
      justify="center"
      align="center"
      px={{ base: "6", md: "20" }}
      py="16"
    >
      <MotionBox
        maxW={{ base: "full", md: "50%" }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Heading as="h1" size="xl" mb="4">
          We Create Digital Solutions
        </Heading>
        <Text fontSize="lg" mb="8">
          With our talented team of professionals, we offer Best Web Designer
          services, Graphic Designing solutions, technical services, digital
          marketing and many more. We have risen from the startup stage to a
          full-fledged tech company that has been conferred with accolades.
        </Text>
        <MotionBox
          as={Button}
          onClick={() => {
            const section = document.getElementById("services");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          bg="blue.800"
          color="blue.200"
          px="8"
          py="6"
          borderRadius="md"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          Our Services
        </MotionBox>
      </MotionBox>
    </Flex>
  );
};

export default ServiceHero;
