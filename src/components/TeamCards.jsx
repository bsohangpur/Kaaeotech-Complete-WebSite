import {
  Box,
  Heading,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CropText } from "../utils";
import { Image } from "@chakra-ui/image";
import imageurl from "../utils/imageurl";

const MotionBox = motion(Box);

const TeamCards = ({ team }) => {
  const { colorMode } = useColorMode();
  const cardWidth = useBreakpointValue({ base: "100%", sm: "300px" });
  const bg = { light: "white", dark: "gray.800" };
  const color = { light: "gray.700", dark: "gray.400" };
  const borderColor = { light: "gray.200", dark: "gray.600" };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box
        w={cardWidth}
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        maxW="300px"
        borderColor={borderColor[colorMode]}
        bg={bg[colorMode]}
        color={color[colorMode]}
        position="relative"
      >
        <Image
          src={team.image && team.image.image && imageurl + team.image.image}
          alt={team.image && team.image.name && team.image.name}
          fallbackSrc="https://via.placeholder.com/300x435"
          className=""
        />
        <Box
          className=" absolute z-10 bottom-0 left-0 w-full text-gray-50 backdrop-blur-xl"
          p="6"
        >
          <Heading textTransform="capitalize" as="h3" size="md">
            {team.name}
          </Heading>
          <Text mt="2" fontWeight="semibold" as="h4" fontSize="sm">
            {team.specialty}.
          </Text>
        </Box>
        <MotionBox
          className=" absolute text-lg font-serif top-0 z-20 left-0 w-full flex items-center h-full text-gray-50 backdrop-blur-xl"
          p="6"
          fontSize="sm"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CropText text={team.bio} />
        </MotionBox>
      </Box>
    </motion.div>
  );
};

export default TeamCards;
