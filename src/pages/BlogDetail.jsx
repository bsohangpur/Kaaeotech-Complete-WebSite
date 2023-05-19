import { Box } from "@chakra-ui/react";
import React from "react";
import { SingleBlog } from "../components";
import {useParams} from 'react-router-dom';
import {blogData} from '../data'

const BlogDetail = () => {
  const link = useParams();

  const [data] =
    blogData &&
    blogData.filter((value) => value.title === link.blog.replaceAll('%20',' '));

  return (
    <Box my={12}>
      <SingleBlog blog={data} similarBlogs={[data]}/>
    </Box>
  );
};

export default BlogDetail;
