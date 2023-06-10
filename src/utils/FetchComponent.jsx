import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Loading } from ".";
import { useDispatch } from "react-redux";

const FetchComponent = ({ fetchFunction, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFunction);
  }, []);

  return (
    <Box>
      {loading && (
        <Box className="w-full z-[999] h-screen fixed top-0 left-0 bg-transparent backdrop-blur-sm">
          <Loading />
        </Box>
      )}
    </Box>
  );
};

export default FetchComponent;
