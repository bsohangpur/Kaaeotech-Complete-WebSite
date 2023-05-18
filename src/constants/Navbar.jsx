import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { logo } from "../assets";
import { menuItems } from "../data";
import PreNavbar from "./PreNavbar";
import { Image } from "@chakra-ui/image";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const menuVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  const menuButton = useBreakpointValue({
    base: (
      <IconButton
        size="md"
        fontSize="lg"
        aria-label="Open menu"
        icon={!isMobile ? <HamburgerIcon /> : <CloseIcon />}
        variant="ghost"
        onClick={toggleMobile}
      />
    ),
    md: null,
  });

  return (
    <Box>
      <PreNavbar />
      <Box borderBottom="2px" borderColor="gray.200">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding={{ base: 2, md: 4 }}
          bg="white"
          color="gray.800"
        >
          <Flex align="center">
            <Box
              as={Link}
              to="/"
              fontWeight="bold"
              letterSpacing="tight"
              fontSize={{ base: "xl", md: "2xl" }}
              color="teal.500"
            >
              <Image
                h={{ base: 8, lg: 12 }}
                alt="kaaeotech solutions logo"
                src={logo}
              />
            </Box>
          </Flex>

          <Spacer />

          {menuButton}

          <Box
            className=" pt-12 flex justify-center w-3/5 fixed top-0 left-0 h-screen"
            bg={isMobile && "blackAlpha.700"}
            zIndex={isOpen || isMobile ? "overlay" : "hide"}
            onClick={() => setIsMobile(false)}
          >
            <motion.div
              w={{ base: "80%", md: "auto" }}
              h="100vh"
              bg="white"
              variants={menuVariants}
              initial="hidden"
              animate={isMobile || isOpen ? "visible" : "hidden"}
            >
              <VStack
                display={{ base: "block", md: "none" }}
                spacing={4}
                align="stretch"
                sx={{ "& > *": { w: "full" } }}
                pt={{ base: 10, md: 0 }}
              >
                {menuItems.map((item) => (
                  <motion.div key={item.label} variants={menuVariants}>
                    <Button
                      as={Link}
                      to={item.to}
                      variant="ghost"
                      color="gray.200"
                      fontWeight="medium"
                      sx={{ textTransform: "uppercase" }}
                      onClick={() => setIsMobile(false)}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </VStack>
            </motion.div>
          </Box>

          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            {menuItems.map((item) => (
              <Button
                as={Link}
                to={item.to}
                key={item.label}
                variant="outline"
                size={{ md: "sm", lg: "md" }}
                color="gray.500"
                fontWeight="medium"
                sx={{ textTransform: "uppercase" }}
              >
                {item.label}
              </Button>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
