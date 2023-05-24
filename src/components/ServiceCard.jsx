import { Box, Flex, Heading, Button, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);

const ServiceCard = ({ icon, title, description }) => {
  return (
    <MotionBox
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      p="6"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
      w={{ base: "full", md: "30%" }}
      mb={{ base: "8", md: "0" }}
    >
      <Flex align="center" mb="4">
        {icon}
        <Heading as="h2" size="md" ml="4">
          {title}
        </Heading>
      </Flex>
      <Text minH={48}>{description}</Text>
      <Button
        as={Link}
        href={`/service/${title}`}
        className="mt-4"
        colorScheme="blackAlpha"
        rightIcon={<FaArrowRight />}
      >
        learn more
      </Button>
    </MotionBox>
  );
};

export default ServiceCard;
