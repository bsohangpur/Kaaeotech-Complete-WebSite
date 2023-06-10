import { Box } from "@chakra-ui/react";
import React from "react";
import { BlogContainer } from "../containers";
import { useSelector } from "react-redux";
import { GetBlogData } from "../redux/slices/blogSlice";
import { FetchComponent } from "../utils";

const Blog = () => {
  const { blogs, isLoading } = useSelector((state) => state.blog);

  return (
    <Box>
      <FetchComponent fetchFunction={GetBlogData()} loading={isLoading} />
      <BlogContainer blogs={blogs && blogs} />
    </Box>
  );
};

export default Blog;
