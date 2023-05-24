import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../App.css";
import { FreeMode, Thumbs } from "swiper";
import { Image } from "@chakra-ui/image";
import imageurl from "../utils/imageurl";

const MotionBox = motion(Box);

const PortfolioCards = ({ project }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <MotionBox
      key={project.id}
      position="relative"
      bg="white"
      h="100%"
      w={{ base: "100%", md: "45%", lg: "30%" }}
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
              src={imageurl + image.image}
              alt={image.name}
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
              src={imageurl + image.image}
              alt={image.name}
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
        textTransform="capitalize"
      >
        {project.company}
      </Box>
      <Box p="6">
        <Heading as="h3" textTransform="capitalize" fontSize="xl" mb="4">
          {project.name}
        </Heading>
        <Text textTransform="capitalize" mb="4">
          {project.details}
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="4"
          justify="center"
        >
          <Button
            as={Link}
            href={project.url}
            target="_blank"
            colorScheme="green"
            size="sm"
            borderRadius="full"
            px="4"
          >
            View Project
          </Button>
        </Stack>
      </Box>
    </MotionBox>
  );
};

export default PortfolioCards;
