import {
  Box,
  Flex,
  Text,
  IconButton,
  Input,
  Link as link,
  Button,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { menuItems, socialIcons } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  const toast = useToast();
  const MotionLink = motion(link);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You will now receive our newsletter.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box bg="gray.800" color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        padding={{ base: 4, md: 8 }}
        maxW="1200px"
        mx="auto"
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            KaeeoTech Solutions
          </Text>
          <Text mb={4} w="80%">
            Content And Materials On Website Belong To KaaeoTech Solution™
          </Text>
          <Flex gap={2}>
            {socialIcons.map(({ icon: Icon, href, colorScheme }) => (
              <MotionLink
                href={href}
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                key={href}
                mr={2}
                _last={{ mr: 0 }}
              >
                <IconButton
                  aria-label={href}
                  icon={<Icon fontSize="1.5em" />}
                  variant="outline"
                  colorScheme={colorScheme}
                />
              </MotionLink>
            ))}
          </Flex>
          <Flex gap={4} mt={4} flexWrap="wrap">
            {menuItems.map((item) => (
              <motion.div key={item.label} variants={menuVariants}>
                <Button
                  as={Link}
                  to={item.to}
                  variant="link"
                  colorScheme="teal"
                  fontWeight="medium"
                  sx={{ textTransform: "uppercase" }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            <motion.div variants={menuVariants}>
              <Button
                as={Link}
                to="/career"
                variant="link"
                colorScheme="teal"
                fontWeight="medium"
                sx={{ textTransform: "uppercase" }}
              >
                career
              </Button>
            </motion.div>
          </Flex>
        </Box>
        <Box mt={{ base: 8, md: 0 }}>
          <form onSubmit={handleSubmit}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Newsletter
            </Text>
            <Flex direction={{ base: "column", md: "row" }}>
              <Input
                placeholder="Your email address"
                mb={{ base: 4, md: 0 }}
                mr={{ md: 4 }}
              />
              <Button type="submit" colorScheme="teal" px={8}>
                Subscribe
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
      <Box bg="gray.700" py={4} textAlign="center">
        <Text fontSize="sm" color="white">
          © {new Date().getFullYear()} KaeeoTech Solutions. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
