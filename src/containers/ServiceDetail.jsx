import { Box, Flex, Icon } from "@chakra-ui/react";
import { ServiceCard } from "../components";
import { icons } from "../data";
import { Heading } from "../constants";

const ServiceDetail = ({ link,service }) => {


  return (
    <Box my={12} id="services">
      <Heading title="Our Services" />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        flexWrap="wrap"
        gap={4}
        px={{ base: "6", md: "20" }}
        py="10"
      >
        {service &&
          service.map((data) => {
            const [icon] = icons.filter((icon) => icon.name === data.icon);
            
            return (
              <ServiceCard
                key={data.title}
                icon={<Icon as={icon.icon} boxSize="10" color={icon.color} />}
                title={data.title}
                description={data.description}
                link={link}
              />
            );
          })}
      </Flex>
    </Box>
  );
};

export default ServiceDetail;
