import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../App.css";
import { FreeMode, Thumbs } from "swiper";

const MotionBox = motion(Box);

const PortfolioCards = ({ project }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <MotionBox
      key={project.id}
      position="relative"
      bg="white"
      h="100%"
      w={{base:'100%',md:'45%', lg:'30%'}}
      borderRadius="md"
      boxShadow="lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {project.images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              alt={image}
              objectFit="cover"
              h="full"
              w="full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {project.images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              alt={image}
              objectFit="cover"
              h="full"
              w="full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        position="absolute"
        top="0"
        left="0"
        bg="gray.800"
        color="white"
        px="4"
        py="2"
        zIndex={100}
      >
        {project.company}
      </Box>
      <Box p="6">
        <Heading as="h3" fontSize="xl" mb="4">
          {project.name}
        </Heading>
        <Text mb="4">{project.details}</Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="4"
          justify="center"
        >
          <Button colorScheme="green" size="sm" borderRadius="full" px="4">
            View Project
          </Button>
        </Stack>
      </Box>
    </MotionBox>
  );
};

export default PortfolioCards;
