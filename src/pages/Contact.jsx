import React from "react";
import { Box } from "@chakra-ui/react";
import { ContactHero, PrivacyPolicy } from "../containers";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const Contact = () => {
  return (
    <PageAnimation>
      <Box>
        <Helmet>
          <title>Contact Us page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Contact Us page page of Kaaeotech Solutions."
          />
        </Helmet>
        <Box mt={12}>
          <ContactHero />
        </Box>
        <PrivacyPolicy />
      </Box>
    </PageAnimation>
  );
};

export default Contact;
