import { Box } from "@chakra-ui/react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <HashLoader color="rgb(59 130 246)" />
    </Box>
  );
};

export default Loading;
