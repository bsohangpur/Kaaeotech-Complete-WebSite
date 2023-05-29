import { Box, Avatar, VStack } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ comments }) => {
  return (
    <Box mt={8}>
      <VStack align="start" spacing={4} mt={4}>
        {comments.map((comment) => (
          <Box key={comment.id} className="grid gap-2  place-items-start">
            <Box className="flex gap-2 capitalize justify-center items-center">
              <Avatar
                as={FaUserCircle}
                size={{ base: "sm", md: "md" }}
                mr={2}
              />
              <strong>{comment.name}</strong>
            </Box>
            <Box>{comment.text}</Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Comment;
