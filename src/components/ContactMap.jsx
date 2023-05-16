import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactMap = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box w={{ base: "100%", md: "50%" }} py={4} px={4}>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <Box
            borderRadius="lg"
            h="100%"
            bg="white"
            shadow="xl"
            px={4}
            py={5}
            sm={{ p: 6 }}
          >
            {/* <Flex alignItems="center" justifyContent="space-between" mb={4}>
              <Heading as="h3" size="lg" fontWeight="medium" color="gray.900">
                Contact Us
              </Heading>
            </Flex> */}
            <Box>
              <Flex alignItems="center" mt={2}>
                <FaPhone className="flex-shrink-0 h-6 w-6 text-gray-400" />
                <Text
                  ml={3}
                  fontSize="base"
                  fontWeight="medium"
                  color="gray.700"
                >
                  +91 9700836220
                </Text>
              </Flex>
              <Flex alignItems="center" mt={2}>
                <FaEnvelope className="flex-shrink-0 h-6 w-6 text-gray-400" />
                <Text
                  ml={3}
                  fontSize="base"
                  fontWeight="medium"
                  color="gray.700"
                >
                  kaaeotechsolutions@gmail.com
                </Text>
              </Flex>
              <Flex alignItems="center" mt={2}>
                <FaMapMarkerAlt className="flex-shrink-0 h-6 w-6 text-gray-400" />
                <Text
                  ml={3}
                  fontSize="base"
                  fontWeight="medium"
                  color="gray.700"
                >
                  6-3-657/p1, Kapadia Ln, Somajiguda, Hyderabad, Telangana
                  500082
                </Text>
              </Flex>
              <Box mt={8} borderRadius="lg" overflow="hidden">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.414052101616!2d78.4573105!3d17.4208978!2m3!1f0!2f16.75!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f03fbcdf63%3A0x9911d3001d853b8b!2sKaaeotech%20Solutions!5e0!3m2!1sen!2sin!4v1651661120004!5m2!1sen!2sin"
                  width="600"
                  height="550"
                  allowFullScreen={true}
                  style={{ border: "0" }}
                  loading="lazy"
                  className="motion-safe:animate-fade-in"
                ></iframe>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default ContactMap;
