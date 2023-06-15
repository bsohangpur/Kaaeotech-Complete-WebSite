import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { FAQSection, ServiceDetail, ServiceHero } from "../containers";
import { useSelector } from "react-redux";
import { FetchComponent } from "../utils";
import { GetServiceData } from "../redux/slices/serviceSlice";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const Service = () => {
  const { services, isLoading } = useSelector((state) => state.service);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageAnimation>
      <Box>
        <Helmet>
          <title>Service page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Service page page of Kaaeotech Solutions."
          />
        </Helmet>
        {scrollY >= 150 && isLoading && (
          <FetchComponent
            fetchFunction={GetServiceData()}
            loading={isLoading}
          />
        )}

        <ServiceHero />
        <ServiceDetail service={services && services} />
        <FAQSection />
      </Box>
    </PageAnimation>
  );
};

export default Service;
