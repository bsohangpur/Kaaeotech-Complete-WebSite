import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Navbar, Footer } from "./constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Portfolio, Pricing, Service } from "./pages";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
