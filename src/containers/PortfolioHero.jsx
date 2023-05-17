import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PortfolioCards } from "../components";
import { projects } from "../data";

const PortfolioHero = ({slice}) => {
  const MotionBox = motion(Box);

  return (
    <Box  id="portfolio" bg="gray.100" py={{ base: "10", md: "20" }}>
      <Box mx="auto" px={{ base: "6", md: "0" }}>
        <Heading
          as="h2"
          ml={12}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          mb={{ base: "6", md: "12" }}
        >
          Portfolio
        </Heading>
        <Box>
          <MotionBox
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.slice(0,slice).map((project) => (
              <PortfolioCards key={project.name} project={project} />
            ))}
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioHero;
