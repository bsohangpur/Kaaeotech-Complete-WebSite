import React from "react";
import { Box } from "@chakra-ui/react";
import { ContactHero, PrivacyPolicy } from "../containers";

const Contact = () => {
  return (
    <Box>
      <ContactHero />
      <PrivacyPolicy/>
    </Box>
  );
};

export default Contact;
