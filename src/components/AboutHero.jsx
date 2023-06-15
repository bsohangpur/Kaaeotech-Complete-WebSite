import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/image";
import { Link } from "react-router-dom";

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Box py="10" className="flex justify-center items-center">
      <Flex
        w="90%"
        justifyContent="center"
        gap={{ base: 10, md: 0 }}
        flexWrap="wrap"
        alignItems="center"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="w-full md:w-1/2"
        >
          <Box ml={{ md: "10" }}>
            <Text fontSize="2xl" fontWeight="bold" mb="4">
              About Us
            </Text>
            <Text fontSize="lg" mb="6">
              We are a company that specializes in creating innovative solutions
              for businesses of all sizes. Our team of experts has years of
              experience in the industry and is dedicated to providing our
              clients with the best possible service.
            </Text>
            <Button
              as={Link}
              to="/contact"
              variant="solid"
              variants={buttonVariants}
              colorScheme="blue"
              size="md"
            >
              Contact Us
            </Button>
          </Box>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="https://img.freepik.com/free-photo/operation-process-performance-development-icon_53876-16541.jpg?w=826&t=st=1684213124~exp=1684213724~hmac=e4a4e48110f19d846a999bc4e1e652233c785a8552dabb0de6e62b5afb815a100"
            alt="company image"
            className=" rounded-md w-full h-fit"
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default About;
