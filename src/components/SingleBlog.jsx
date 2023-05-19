import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Avatar,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {SanitizedTextView} from '../utils';

// const WordSplitter = (text, start, end) => {
//   const words = text.split(" ");
//   const content = words.slice(start, end).join(" ");
//   return `${content}.`;
// };

const SingleBlog = ({ blog, similarBlogs }) => {
  const MotionBox = motion(Box);

  return (
    <Flex justify="center" align="center" minHeight="100vh" overflow="hidden">
      <Grid
        templateColumns={{ base: "1fr", md: "3fr 1fr" }}
        gap={8}
        maxW="1200px"
        width="100%"
        p={8}
      >
        <VStack spacing={8} align="flex-start">
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SanitizedTextView content={blog.text}/>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            w='100%'
          >
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Comments
            </Text>
            <Box mb={10}>
              <Textarea placeholder="Enter your comment" mb={4} />
              <HStack>
                <Avatar as={FaUserCircle} size="md" mr={2} />
                <Input placeholder="Your name" w="100%" mr={2} />
                <Button colorScheme="purple">Comment</Button>
              </HStack>
            </Box>
          </MotionBox>
        </VStack>
        <VStack spacing={8} align="flex-start">
          {similarBlogs.map((blog, index) => (
            <MotionBox
              key={index}
              as={Link}
              to="/"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 1.5 }}
              borderRadius="lg"
              w="100%"
            >
              <MotionBox
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
                className="w-full shadow-md rounded-lg p-4 flex flex-col gap-2 items-center"
              >
                <Image
                  src={blog.image}
                  fallbackSrc="https://via.placeholder.com/300x200"
                  alt="Similar Blog Image"
                  objectFit="cover"
                />
                <Heading as="h3" fontSize="xl" mb={2}>
                  {blog.title}
                </Heading>
                <Text>{blog.summary}</Text>
              </MotionBox>
            </MotionBox>
          ))}
        </VStack>
      </Grid>
    </Flex>
  );
};

export default SingleBlog;
