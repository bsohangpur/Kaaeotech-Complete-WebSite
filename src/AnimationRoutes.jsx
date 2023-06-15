import React from "react";
import { Error } from "./constants";
import { Route, Routes, useLocation } from "react-router-dom";
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
  Career,
} from "./pages";
import "./App.css";
import { _404 } from "./assets";
import { AnimatePresence } from "framer-motion";

const AnimationRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exect path="/" element={<Home />} />
        <Route exect path="/about" element={<About />} />
        <Route exect path="/contact" element={<Contact />} />
        <Route exect path="/portfolio" element={<Portfolio />} />
        <Route exect path="/pricing" element={<PricingPage />} />
        <Route exect path="/service" element={<Service />} />
        <Route exect path="/service/:service" element={<ServiceDetailPage />} />
        <Route exect path="/blog" element={<Blog />} />
        <Route exect path="/blog/:blog" element={<BlogDetail />} />
        <Route exect path="/career" element={<Career />} />
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
    </AnimatePresence>
  );
};

export default AnimationRoutes;
