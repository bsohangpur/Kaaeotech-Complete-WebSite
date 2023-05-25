import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { TestimonialCard } from "../components";
// import { testimonials } from "../data";

import "swiper/swiper.min.css";


const Testimonial = ({testimonials}) => {
  return (
    <Box maxW="800px" mx="auto" my={16}>
      <Heading
        textTransform="capitalize"
        as="h2"
        my={10}
        size="lg"
        textAlign="center"
      >
        Testimonial{" "}
      </Heading>
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonial;
