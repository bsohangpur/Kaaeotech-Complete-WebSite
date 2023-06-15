import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Navbar, Footer } from "./constants";
import { BrowserRouter, useLocation } from "react-router-dom";
import AnimationRoutes from "./AnimationRoutes";
import "./App.css";
import { WhatsappBtn } from "./utils";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <WhatsappBtn />
        <AnimationRoutes />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
