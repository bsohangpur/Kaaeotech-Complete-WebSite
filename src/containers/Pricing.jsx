import { Box, Flex, Stack, useMediaQuery, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PricingCard } from "../components";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper";

import "./containers.css";

const pricingVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const MobilePricing = ({ slice, data }) => {
  return (
    <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{ delay: 3000 }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper"
      >
      {data
        .slice(0, slice)
        .map(({ title, price, features, isPopular, ourPrice }) => (
          <SwiperSlide key={title}>
            <motion.div
              variants={pricingVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.01 }}
              className=" w-5/6"
            >
              <PricingCard
                title={title}
                price={price}
                features={features}
                isPopular={isPopular}
                ourPrice={ourPrice}
              />
            </motion.div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

const Pricing = ({ slice, data }) => {
  const [isMobileView] = useMediaQuery("(max-width: 768px)");

  return (
    <Box id="pricing" py={4}>
      <Flex justify="center">
        {isMobileView ? (
          <MobilePricing data={data} slice={slice} />
        ) : (
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            {data
              .slice(0, slice)
              .map(({ title, price, features, isPopular, ourPrice }) => (
                <motion.div
                  key={title}
                  variants={pricingVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                >
                  <PricingCard
                    title={title}
                    price={price}
                    features={features}
                    isPopular={isPopular}
                    ourPrice={ourPrice}
                  />
                </motion.div>
              ))}
          </Stack>
        )}
      </Flex>
    </Box>
  );
};

export default Pricing;
