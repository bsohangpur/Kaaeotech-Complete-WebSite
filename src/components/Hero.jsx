import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { hero_bg } from "../assets";

const Hero = () => {
  const heroVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const ctaButtonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Box
      bgImage={`url(${hero_bg})`}
      bgSize="cover"
      bgPosition="center"
      h='auto'
      py={12}
      position="relative"
    >
      <Box
        bg="rgba(23, 20, 100, 0.4)"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
      />
      <Flex
        direction="column"
        justify="center"
        align="center"
        h="100%"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-white w-full text-center flex flex-col items-center"
        >
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            mb={{ base: 4, md: 8 }}
            textShadow="1px 1px #000"
            zIndex={200}
          >
            Transform Your Business with Our Digital Solutions
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            maxW="800px"
            fontWeight="semibold"
            mb={{ base: 4, md: 8 }}
            textShadow="1px 1px #000"
            zIndex={200}
          >
            Looking to elevate your online presence and stand out in the digital
            landscape? Our digital solutions company offers top-of-the-line
            services for web development, web design, and graphic design.
            Whether you're a small business looking to establish a strong online
            presence or a large corporation seeking to revamp your website, we
            have the expertise and skills to help you achieve your goals. From
            eye-catching graphics and intuitive interfaces to seamless user
            experiences, our team of professionals is dedicated to delivering
            cutting-edge solutions that drive results. Partner with us and take
            your digital presence to the next level.
          </Text>
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            delay={0.5}
          >
            <ButtonGroup>
              <Button
                size="lg"
                colorScheme="teal"
                px={{ base: 8, md: 12 }}
                mr={{ base: 0, md: 4 }}
                mb={{ base: 4, md: 0 }}
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  const section = document.getElementById("pricing");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                colorScheme="linkedin"
                px={{ base: 8, md: 12 }}
                mb={{ base: 4, md: 0 }}
              >
                Our Pricing
              </Button>
            </ButtonGroup>
          </motion.div>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Hero;
