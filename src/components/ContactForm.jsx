import {
  Box,
  Text,
  Input,
  Textarea,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { serviceOptions } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SendData } from "../redux/slices/contactSlice";

const ContactForm = () => {
  const [pricing, setPricing] = useState(0);
  const [submit, setSubmit] = useState(false);
  const toast = useToast();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.contact);


  const handlePlanChange = (event) => {
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
    plan: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    phone: Yup.string().required("phone number is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("email address is required"),
    requirement: Yup.string().required("required"),
    plan: Yup.string().notOneOf([""], "Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const data = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      requirement: values.requirement,
      price: pricing,
      plan: values.plan,
    };
    dispatch(SendData(data));
    setSubmitting(false);
    setSubmit(true);
  };

  if (!isLoading) {
    toast({
      title: "Message Submited",
      position: "top",
      description:
        "your responce has submited successfully we will contact you soon",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(()=>navigation(0), 1000);
  }

  return (
    <Box w={{ base: "100%", md: "50%" }}>
      <Box maxW="1200px" mx="auto" px={{ base: "2", md: "0" }}>
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
                  <Field name="plan">
                    {({ field, form }) => (
                      <Box mb="4">
                        <Text mb="2" fontWeight="semibold">
                          Plan
                        </Text>
                        <Select
                          placeholder="Select a plan"
                          {...field}
                          isInvalid={form.errors.plan && form.touched.plan}
                          onChange={(event) => {
                            field.onChange(event);
                            handlePlanChange(event);
                          }}
                        >
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Select>
                        <ErrorMessage
                          name="plan"
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
                    <Input type="text" value={`₹${pricing}`} isReadOnly />
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
                  isDisabled={submit}
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
