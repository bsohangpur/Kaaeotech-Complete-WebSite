import { Box } from "@chakra-ui/react";
import React from "react";
import { BlogContainer } from "../containers";
import { useSelector } from "react-redux";
import { GetBlogData } from "../redux/slices/blogSlice";
import { FetchComponent } from "../utils";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const Blog = () => {
  const { blogs, isLoading } = useSelector((state) => state.blog);

  return (
    <PageAnimation>
      <Box
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Helmet>
          <title>Blog page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Blog page page of Kaaeotech Solutions."
          />
        </Helmet>
        <FetchComponent fetchFunction={GetBlogData()} loading={isLoading} />
        <BlogContainer blogs={blogs && blogs} />
      </Box>
    </PageAnimation>
  );
};

export default Blog;
