import { Box, ChakraProvider } from "@chakra-ui/react";
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
import { Loading, WhatsappBtn } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { GetServiceData } from "./redux/slices/serviceSlice";
import { GetTestimonialData } from "./redux/slices/testimonialSlice";
import { GetPortfolioData } from "./redux/slices/portfolioSlice";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);
  const testimonial = useSelector((state) => state.service);
  const portfolio = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(GetServiceData());
    dispatch(GetTestimonialData());
    dispatch(GetPortfolioData());
  }, []);

  return (
    <ChakraProvider>
      {service.isLoading && testimonial.isLoading && portfolio.isLoading && (
        <Box className="w-full z-[999] h-screen fixed top-0 left-0 bg-transparent backdrop-blur-sm">
          <Loading />
        </Box>
      )}
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
