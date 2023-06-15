import { Box, Flex, Heading, Button, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { CropText } from "../utils";

const MotionBox = motion(Box);

const ServiceCard = ({ icon, title, description }) => {
  return (
    <MotionBox
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      borderWidth='2px'
      p="6"
      whileTap={{ scale: 0.9 }}
      cursor="pointer"
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
      <CropText text={description} />
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
