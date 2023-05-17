import { Box, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Image} from '@chakra-ui/image';

const Error = ({ code, message, detail, path, image }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h='auto'
      minH='90vh'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className=" mb-8 grid place-items-center"
      >
        <Image className=" w-80" src={image} alt="Error" />
        <Text fontSize="6xl" fontWeight="bold" color="red.500">
          {code}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Oops! {message}
        </Text>
        <Text>
            {detail}
        </Text>
        <Button colorScheme="red" size="lg" as={Link} to={path}>
          Go back to Home
        </Button>
      </motion.div>
    </Box>
  );
};

export default Error;