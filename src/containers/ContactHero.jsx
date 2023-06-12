import { Box } from "@chakra-ui/react";
import React from "react";
import { ContactForm, ContactMap } from "../components";
import { Heading } from "../constants";

const ContactHero = ({ isHome }) => (
  <Box>
    <Heading title="Reach Us" />
    <Box
      mx={{ base: 2, md: 8 }}
      id="contact"
      className=" flex flex-wrap justify-center items-center my-8"
    >
      <ContactForm isHome={isHome} />
      <ContactMap />
    </Box>
  </Box>
);

export default ContactHero;
