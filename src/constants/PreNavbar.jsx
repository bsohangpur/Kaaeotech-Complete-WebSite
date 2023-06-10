import { Flex, Button, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { motion } from "framer-motion";
import {Link as link} from 'react-router-dom'

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
        leftIcon={<GiRotaryPhone className="text-xl" />}
        colorScheme="blue"
        variant="link"
        href="tel:04040171429"
      >
        04040171429
      </MotionButton>
    </Flex>
  );
};

export default PreNavbar;