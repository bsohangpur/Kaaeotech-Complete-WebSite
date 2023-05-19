import { Box, Heading, Text, Image, Badge, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const BlogCard = ({ data }) => {
  const { link, image, title, categories, text, tags, summary } = data;

  return (
    <MotionBox
      as={Link}
      to={title}
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
        <Image src={image} alt={title} mb={4} borderRadius="md" />
        <Heading as="h2" size="md" mb={2} fontWeight="bold">
          {title}
        </Heading>
        <Flex flexWrap='wrap' gap={2} mb={2}>
        {categories.map((category, index) => (
          <Badge key={category + index} colorScheme="purple">
            {category}
          </Badge>
        ))}
        </Flex>

        <Text fontSize="lg" mb={4}>
          {summary}.
        </Text>
        <Box d="flex" justifyContent="flex-end">
          {tags.map((tag, index) => (
            <Badge key={tag + index} colorScheme="green" mr={2}>
              {tag}
            </Badge>
          ))}
        </Box>
      </motion.div>
    </MotionBox>
  );
};

export default BlogCard;
