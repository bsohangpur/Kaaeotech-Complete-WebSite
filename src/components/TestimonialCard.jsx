import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";


const TestimonialCard = ({ testimonial }) => {
    const { colorMode } = useColorMode();
    const bg = { light: "white", dark: "gray.800" };
    const color = { light: "gray.700", dark: "gray.400" };
    const borderColor = { light: "gray.200", dark: "gray.600" };


    return (
        <Box
            p={8}
            mx={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={borderColor[colorMode]}
            bg={bg[colorMode]}
            color={color[colorMode]}
        >
            <Heading textTransform="capitalize" as="h3" size="md" mb={4}>
                {testimonial.name}
            </Heading>
            <Text fontSize="lg" mb={4}>
                {testimonial.title}
            </Text>
            <Text fontSize="md">{testimonial.text}</Text>
        </Box>
    );
};

export default TestimonialCard;