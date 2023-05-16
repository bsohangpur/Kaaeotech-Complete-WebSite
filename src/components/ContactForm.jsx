import { Box, Text, Input, Textarea, Select, Button } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { serviceOptions } from "../data";

const ContactForm = () => {
  const [pricing, setPricing] = useState("₹");

  const handleServiceChange = (event) => {
    const selectedOption = serviceOptions.find(
      (option) => option.value === event.target.value
    );
    setPricing(selectedOption?.price || "");
  };

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    requirement: "",
    service: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    phone: Yup.string().required("phone number is required"),
    email: Yup.string().email("Invalid email").required("email address is required"),
    requirement: Yup.string().required("required"),
    service: Yup.string().notOneOf([""], "Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Box w={{ base: "100%", md: "50%" }}>
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "0" }}>
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={{ base: "6", md: "12" }}
          position="relative"
          overflow="hidden"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box mr={{ base: "0", md: "8" }} mb={{ base: "4", md: "0" }}>
                  <Field name="name">
                    {({ field, form }) => (
                      <Box mb="4">
                        <Text mb="2" fontWeight="semibold">
                          Name
                        </Text>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          {...field}
                          isInvalid={form.errors.name && form.touched.name}
                        />
                        <ErrorMessage
                          name="name"
                          component={Text}
                          mt="2"
                          color="red.500"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field, form }) => (
                      <Box mb="4">
                        <Text mb="2" fontWeight="semibold">
                          Phone
                        </Text>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          {...field}
                          isInvalid={form.errors.phone && form.touched.phone}
                        />
                        <ErrorMessage
                          name="phone"
                          component={Text}
                          mt="2"
                          color="red.500"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <Box mb="4">
                        <Text mb="2" fontWeight="semibold">
                          Email
                        </Text>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          {...field}
                          isInvalid={form.errors.email && form.touched.email}
                        />
                        <ErrorMessage
                          name="email"
                          component={Text}
                          mt="2"
                          color="red.500"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="service">
                    {({ field, form }) => (
                      <Box mb="4">
                        <Text mb="2" fontWeight="semibold">
                          Service
                        </Text>
                        <Select
                          placeholder="Select a service"
                          {...field}
                          isInvalid={
                            form.errors.service && form.touched.service
                          }
                          onChange={(event) => {
                            field.onChange(event);
                            handleServiceChange(event);
                          }}
                        >
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Select>
                        <ErrorMessage
                          name="service"
                          component={Text}
                          mt="2"
                          color="red.500"
                        />
                      </Box>
                    )}
                  </Field>
                  <Field name="requirement">
                    {({ field, form }) => (
                      <Box mb="4">
                        <Text mb="2" fontWeight="semibold">
                          Requirement
                        </Text>
                        <Textarea
                          placeholder="Enter your requirement"
                          {...field}
                          isInvalid={
                            form.errors.requirement && form.touched.requirement
                          }
                        />
                        <ErrorMessage
                          name="requirement"
                          component={Text}
                          mt="2"
                          color="red.500"
                        />
                      </Box>
                    )}
                  </Field>
                  <Box mb="4">
                    <Text mb="2" fontWeight="semibold">
                      Price
                    </Text>
                    <Input type="text" value={pricing} isReadOnly />
                  </Box>
                </Box>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  bg="green.500"
                  color="white"
                  px="10"
                  py="4"
                  mt="4"
                  borderRadius="lg"
                  _hover={{ bg: "green.600" }}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
