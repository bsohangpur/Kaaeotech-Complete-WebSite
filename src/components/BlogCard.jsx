import { Box, Heading, Text, Image, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const BlogCard = () => {
  return (
    <MotionBox
      bg="white"
      boxShadow="md"
      p={8}
      borderRadius="md"
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="https://via.placeholder.com/300x180"
          alt="Blog Post Image"
          mb={4}
          borderRadius="md"
        />
        <Heading as="h2" size="md" mb={2} fontWeight="bold">
          Blog Post Title
        </Heading>
        <Badge colorScheme="purple" mb={2}>
          Category
        </Badge>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ullam?
        </Text>
        <Box d="flex" justifyContent="flex-end">
          <Badge colorScheme="green" mr={2}>
            Tag 1
          </Badge>
          <Badge colorScheme="green" mr={2}>
            Tag 2
          </Badge>
          <Badge colorScheme="green" mr={2}>
            Tag 3
          </Badge>
        </Box>
      </motion.div>
    </MotionBox>
  );
};

export default BlogCard;
