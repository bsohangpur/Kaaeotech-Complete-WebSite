import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {privacyPolicy} from '../data'


const MotionBox = motion(Box);

const PrivacyPolicy = () => {
  return (
    <Box bg="gray.100" className="flex justify-center items-center w-full px-2 md:px-0 py-4">
      <MotionBox
        w={{base:'100%',md:"90%"}}
        p={10}
        borderRadius="xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        shadow="xl"
        border="1px"
        bg='white'
        borderColor="gray.300"
      >
        <Flex justify="center">
          <Text fontSize="2xl" fontWeight="bold">
            Privacy Policy
          </Text>
        </Flex>
        <Flex direction="column" mt={10}>
          {privacyPolicy.map((section, index) => (
            <Box key={index} mt={index > 0 ? 8 : 0}>
              <Flex align="center" mb={4}>
                {React.createElement(section.icon, {
                  size: 20,
                  color: "#718096",
                })}
                <Text ml={2} textTransform='capitalize' fontWeight="medium">
                  {section.title}
                </Text>
              </Flex>
              <Text ml={8}>{section.content}</Text>
            </Box>
          ))}
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default PrivacyPolicy;