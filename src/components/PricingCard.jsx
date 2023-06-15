import { useToast } from "@chakra-ui/react";
import { Box, Flex, Text, Button, Stack, Icon, Link } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
import { setPlan } from "../redux/slices/serviceSlice";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const PricingCard = ({ title, price, features, isPopular, ourPrice }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handlePlan = (data) => {
    dispatch(setPlan(data));

    toast({
      title: data.value + " Plan Selected",
      description: "You have successfully selected a plan.",
      status: "info",
      position: "top-right",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <MotionBox
      bg="white"
      borderRadius="lg"
      shadow="lg"
      borderWidth='2px'
      overflow="hidden"
      p={6}
      textAlign="center"
      position="relative"
      whileHover={{ rotate: "5deg"  }}
    >
      {isPopular && (
        <Box
          bg="teal.500"
          color="white"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
          fontSize="sm"
          position="absolute"
          top={0}
          left={0}
          right={0}
          py={2}
        >
          Most Popular
        </Box>
      )}
      <Text fontSize="2xl" fontWeight="bold" my={4}>
        {title}
      </Text>
      <Box mb={4}>
        <Text fontSize="5xl" fontWeight="bold" display="inline">
          ₹ {ourPrice}
        </Text>
        <Text fontSize="xl" display="inline" ml={2}>
          /year
        </Text>
        <Text
          className=" flex gap-2 justify-center font-sans font-semibold bg-purple-700 "
          fontSize="2xl"
        >
          <del className=" text-yellow-400">₹ {price}</del>{" "}
          <span className=" text-green-400">
            ({Math.round(((price - ourPrice) / price) * 100)}%{" "}
            <span className=" text-slate-50">Off</span>)
          </span>
        </Text>
      </Box>
      <Stack spacing={2} mb={4}>
        {features.map(({ text, is_available }, index) => (
          <Flex key={text + index} align="center">
            {is_available ? (
              <Icon as={FaCheck} color="green.500" />
            ) : (
              <Icon as={FaTimes} color="red.500" />
            )}
            <Text ml={2}>
              {text}{" "}
              {text === "NO Domain" && (
                <Link href="/" className=" cursor-pointer">
                  (Purchase Here)
                </Link>
              )}
            </Text>
          </Flex>
        ))}
      </Stack>
      <Button
        as={ReactLink}
        to="/contact"
        onClick={() =>
          handlePlan({ label: title, value: title, price: ourPrice })
        }
        colorScheme="teal"
        px={8}
      >
        Select Plan
      </Button>
    </MotionBox>
  );
};

export default PricingCard;
