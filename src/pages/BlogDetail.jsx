import { Box } from "@chakra-ui/react";
import React from "react";
import { SingleBlog } from "../components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetSingleBlogData } from "../redux/slices/blogSlice";
import { FetchComponent } from "../utils";

const BlogDetail = () => {
  const { blog, isLoading } = useSelector((state) => state.blog);
  const link = useParams();

  return (
    <Box my={12}>
      <FetchComponent
        fetchFunction={GetSingleBlogData(link.blog)}
        loading={isLoading}
      />
      <SingleBlog blog={!isLoading && blog[0]} similarBlogs={[]} />
    </Box>
  );
};

export default BlogDetail;
