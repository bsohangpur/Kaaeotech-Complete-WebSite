import { Box } from "@chakra-ui/react";
import React from "react";
import { SingleBlog } from "../components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetSingleBlogData } from "../redux/slices/blogSlice";
import { FetchComponent } from "../utils";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const BlogDetail = () => {
  const { blog, isLoading } = useSelector((state) => state.blog);
  const link = useParams();

  return (
    <PageAnimation>
      <Box my={12}>
        <Helmet>
          <title>Blog Detail page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Blog Detail page page of Kaaeotech Solutions."
          />
        </Helmet>
        <FetchComponent
          fetchFunction={GetSingleBlogData(link.blog)}
          loading={isLoading}
        />
        <SingleBlog blog={!isLoading && blog[0]} similarBlogs={[]} />
      </Box>
    </PageAnimation>
  );
};

export default BlogDetail;
