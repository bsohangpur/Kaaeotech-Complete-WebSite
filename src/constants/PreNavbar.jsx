import { Flex, Button, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const PreNavbar = () => {
  const iconVariants = {
    hover: {
      y: [-3, 3, -3],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <Flex
      justifyContent="center"
      gap={{base:2,md:8}}
      bg="blue.50"
      py={{base:4, md:2}}
      flexWrap='wrap'
      alignItems="center"
    >
      <MotionButton
        as={Link}
        variants={iconVariants}
        whileHover="hover"
        leftIcon={<FaPhone />}
        colorScheme="blue"
        variant="link"
        href="tel:+919700836220"
      >
        +91 9700836220
      </MotionButton>
      <MotionButton
        as={Link}
        variants={iconVariants}
        whileHover="hover"
        leftIcon={<FaEnvelope />}
        colorScheme="linkedin"
        variant="link"
        href="mailto:kaaeotechsolutions@gmail.com"
      >
        kaaeotechsolutions@gmail.com
      </MotionButton>
      <MotionButton
        as={Link}
        variants={iconVariants}
        whileHover="hover"
        leftIcon={<BiWorld />}
        colorScheme="linkedin"
        variant="link"
        target="_blank"
        href="https://www.hostinger.in/domain-name-search"
      >
        Book your domain
      </MotionButton>
    </Flex>
  );
};

export default PreNavbar;
