import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BlogContainer } from "../containers";
import { useDispatch, useSelector } from "react-redux";
import { GetBlogData } from "../redux/slices/blogSlice";
import { Loading } from "../utils";

const Blog = () => {
  const { blogs, isLoading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBlogData());
  }, []);

  return (
    <Box>
      {isLoading && (
        <Box className="w-full z-[999] h-screen fixed top-0 left-0 bg-transparent backdrop-blur-sm">
          <Loading />
        </Box>
      )}
      <BlogContainer blogs={blogs && blogs} />
    </Box>
  );
};

export default Blog;
