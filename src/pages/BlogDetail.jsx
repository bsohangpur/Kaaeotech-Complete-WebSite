import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SingleBlog } from "../components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleBlogData } from "../redux/slices/blogSlice";
import { Loading } from "../utils";

const BlogDetail = () => {
  const { blog, isLoading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const link = useParams();

  useEffect(() => {
    dispatch(GetSingleBlogData(link.blog));
  }, []);

  return (
    <Box my={12}>
      {isLoading && (
        <Box className="w-full z-[999] h-screen fixed top-0 left-0 bg-transparent backdrop-blur-sm">
          <Loading />
        </Box>
      )}
      <SingleBlog blog={!isLoading && blog[0]} similarBlogs={[]} />
    </Box>
  );
};

export default BlogDetail;
