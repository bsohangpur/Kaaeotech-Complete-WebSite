
import { Box, Divider, Flex, Heading, Icon } from "@chakra-ui/react";
import { ServiceCard } from "../components";
import { serviceData } from "../data";

const ServiceDetail = () => {
  return (
    <Box my={12} id="services">
      <Box className=" flex flex-col items-center gap-2">
        <Heading as='h3' size='lg'>Our Services</Heading>
      <Divider w={150}/>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        flexWrap='wrap'
        gap={4}
        px={{ base: "6", md: "20" }}
        py="10"
      >
        {serviceData.map((data) => (
          <ServiceCard
            key={data.title}
            icon={
              <Icon as={data.icon.icon} boxSize="10" color={data.icon.color} />
            }
            title={data.title}
            description={data.description}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ServiceDetail;
