import { Box } from "@chakra-ui/react";
import React from "react";
import { ContactForm, ContactMap } from "../components";

const ContactHero = () => {
  return (
    <Box mx={8} id="contact" className=" flex flex-wrap justify-center items-center my-8">
      <ContactForm />
      <ContactMap />
    </Box>
  );
};

export default ContactHero;
