import { Box, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Pricing } from "../containers";
import imageurl from "../utils/imageurl";

const SingleService = ({ image, title, description, data }) => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="w-full h-[40vh] md:h-[70vh] object-cover object-center"
          src={imageurl + image}
        />
        {/* <Box position="relative">
          <Text className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl text-white text-center">
            {" "}
            <q>We don't just build websites. We build websites that Sells</q>
          </Text>
        </Box> */}
        {/* <Box
          bgImage={}
          className="w-full bg-slate-300 md:h-[70vh]"
          bgSize={{base:"initial",md:"cover"}}
          bgPosition="center"
          bgRepeat="no-repeat"
        /> */}
        <Box>
          <Box className=" p-4 md:w-1/2 md:ml-12 ">
            <Text as="h2" fontSize="3xl" fontWeight="bold" my="4">
              Service: <span className=" font-normal">{title}</span>
            </Text>
            <Text fontSize="xl" mb="4">
              {description}
            </Text>
          </Box>
        </Box>
      </motion.div>
      <Box mx="8" my={4}>
        <Pricing data={data} />
      </Box>
    </Box>
  );
};

export default SingleService;
