import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Navbar, Footer } from "./constants";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Portfolio,
  PricingPage,
  Service,
  ServiceDetailPage,
} from "./pages";
import "./App.css";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:service" element={<ServiceDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
