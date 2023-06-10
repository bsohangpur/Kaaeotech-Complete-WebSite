import React from "react";
import { Box } from "@chakra-ui/react";
import { ContactHero, PrivacyPolicy } from "../containers";

const Contact = () => {
  return (
    <Box>
      <Box mt={12}>
        <ContactHero />
      </Box>
      <PrivacyPolicy/>
    </Box>
  );
};

export default Contact;
