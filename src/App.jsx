import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Navbar, Footer, Error } from "./constants";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Portfolio,
  PricingPage,
  Service,
  ServiceDetailPage,
  Blog,
  BlogDetail,
} from "./pages";
import "./App.css";
import { _404 } from "./assets";
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
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/about" element={<About />} />
          <Route exect path="/contact" element={<Contact />} />
          <Route exect path="/portfolio" element={<Portfolio />} />
          <Route exect path="/pricing" element={<PricingPage />} />
          <Route exect path="/service" element={<Service />} />
          <Route
            exect
            path="/service/:service"
            element={<ServiceDetailPage />}
          />
          <Route exect path="/blog" element={<Blog />} />
          <Route exect path="/blog/:blog" element={<BlogDetail />} />
          <Route
            exect
            path="*"
            element={
              <Error
                code={404}
                message="page not found"
                detail=""
                path="/"
                image={_404}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
