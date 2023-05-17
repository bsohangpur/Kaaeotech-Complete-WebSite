import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { aboutDetail } from "../data";
import { CropText } from "../utils";
import { Heading } from "../constants";
const MotionBox = motion(Box);

const Card = ({ detail }) => {
  return (
    <MotionBox
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      p="6"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <Heading as="h2" textTransform="capitalize" size="md" mb="4">
        {detail.title}
      </Heading>
      <Image src={detail.image} />
      <CropText text={detail.detail} />
    </MotionBox>
  );
};

const AboutWhoWeAre = () => {
  return (
    <Box>
      <Heading title='Who We Are'/>
      <Box className=" grid my-12 grid-cols-1 md:grid-cols-3 gap-2 mx-8 ">
        {aboutDetail.map((value) => (
          <Card key={value.title} detail={value} />
        ))}
      </Box>
    </Box>
  );
};

export default AboutWhoWeAre;
