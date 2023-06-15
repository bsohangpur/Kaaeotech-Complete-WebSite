import { Box, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const WhatsappBtn = () => {
  return (
    <Box className=" fixed z-[1000] rounded-full bottom-6 right-6">
      <MotionLink
        href="https://api.whatsapp.com/send?phone=919700836220"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        target="_blank"
        
      >
        <IconButton
          variant="solid"
          colorScheme="whatsapp"
          borderRadius={999999}
          p={1.5}
          title="whatsapp"
          size='lg'
          icon={<FaWhatsapp size='md' />}
        />
      </MotionLink>
    </Box>
  );
};

export default WhatsappBtn;
