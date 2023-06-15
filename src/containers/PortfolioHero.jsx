import { Box, Heading } from "@chakra-ui/react";
import { PortfolioCards } from "../components";

const PortfolioHero = ({ slice, portfolio }) => {
  return (
    <Box id="portfolio" bg="gray.100" py={{ base: "10", md: "20" }}>
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
          <Box className="flex flex-wrap justify-center gap-6">
            {portfolio &&
              portfolio
                .slice(0, slice)
                .map((project) => (
                  <PortfolioCards key={project.name} project={project} />
                ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioHero;
