import { Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import { BlogCard } from "../components";
import { Heading } from "../constants";
import { blogData } from "../data";

const BlogContainer = ({blogs}) => {
  const gridCols = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Box py={12} mx={8}>
      <Heading title="Our Blog" />
      <Text my={6}>
        Welcome to our blog! Here you'll find our latest thoughts and musings on a
        variety of topics.
      </Text>
      <Grid templateColumns={`repeat(${gridCols}, 1fr)`} gap={10}>
        {blogs.map((blog) => (
          <BlogCard key={blog.title} data={blog} />
        ))}
      </Grid>
    </Box>
  );
};

export default BlogContainer;
