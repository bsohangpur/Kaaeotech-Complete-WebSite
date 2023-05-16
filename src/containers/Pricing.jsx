import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PricingCard } from "../components";
import { pricingData } from "../data";

const pricingVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const Pricing = ({ slice }) => {
  return (
    <Box id="pricing" bg="gray.100" py={16}>
      <Text
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={8}
      >
        Pricing Plans
      </Text>
      <Flex justify="center">
        <Stack direction={{ base: "column", md: "row" }} spacing={8}>
          {pricingData
            .slice(0, slice)
            .map(({ title, price, features, isPopular, ourPrice }) => (
              <motion.div
                key={title}
                variants={pricingVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <PricingCard
                  title={title}
                  price={price}
                  features={features}
                  isPopular={isPopular}
                  ourPrice={ourPrice}
                />
              </motion.div>
            ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Pricing;
