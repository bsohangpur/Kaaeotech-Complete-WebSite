import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SanitizedTextView } from "../utils";
import imageurl from "../utils/imageurl";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import { useEffect } from "react";
import { GetCommentData } from "../redux/slices/commentSlice";
import Comment from "./Comment";

const SingleBlog = ({ blog, similarBlogs }) => {
  const { id, title, image, text } = blog && blog;
  const { comment } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const blog_id = id !== undefined ? id : null;

  useEffect(() => {
    if (blog_id) {
      dispatch(GetCommentData(blog_id));
    }
  }, [blog_id]);

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
          <Box>
            <Heading as="h1">{title}</Heading>
            <Image my={4} src={imageurl + image} alt={title} />
            <SanitizedTextView content={text} />
          </Box>
          <Box w="100%">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Comments
            </Text>
            <CommentForm id={blog_id} />
            <Comment comments={comment} />
          </Box>
        </VStack>
        <VStack spacing={8} align="flex-start">
          {similarBlogs.map((blog, index) => (
            <Box key={index} as={Link} to="/" borderRadius="lg" w="100%">
              <Box className="w-full shadow-md rounded-lg p-4 flex flex-col gap-2 items-center">
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
              </Box>
            </Box>
          ))}
        </VStack>
      </Grid>
    </Flex>
  );
};

export default SingleBlog;
