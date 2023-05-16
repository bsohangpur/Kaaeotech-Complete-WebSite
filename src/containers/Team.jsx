import { Box, Flex, Heading } from "@chakra-ui/react";
import { TeamCards } from "../components";

const Team = ({ title, person }) => {
  return (
    <Box>
      <Heading as="h2" mt={10} size="lg" textAlign="center">
        Our {title}s
      </Heading>
      <Flex
        gap={6}
        my="8"
        mx={{ base: 8, md: 0 }}
        justifyContent="center"
        flexWrap="wrap"
      >
        {person.map((team, index) => (
          <TeamCards key={index} team={team} />
        ))}
      </Flex>
    </Box>
  );
};

export default Team;
