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
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={borderColor[colorMode]}
        bg={bg[colorMode]}
        color={color[colorMode]}
      >
        <Image
          src={team.image && team.image.image && imageurl + team.image.image}
          alt={team.image && team.image.name && team.image.name}
          fallbackSrc="https://via.placeholder.com/300x435"
        />
        <Box p="6">
          <Heading textTransform="capitalize" as="h3" size="md">
            {team.name}
          </Heading>
          <Text mt="4" fontSize="sm">
            {team.profession}
          </Text>
          <Box mt="2" fontSize="sm">
            <CropText text={team.bio} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default TeamCards;
