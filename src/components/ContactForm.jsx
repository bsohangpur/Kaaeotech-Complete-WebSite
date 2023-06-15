import {
  Box,
  Text,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputRightAddon,
  Select as Selects,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
// import { serviceOptions } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SendData } from "../redux/slices/contactSlice";
import { country_tel_code } from "../data";
import Select from "react-select";
import { GetServiceData } from "../redux/slices/serviceSlice";

const ContactForm = ({ isHome }) => {
  const [submit, setSubmit] = useState(false);
  const toast = useToast();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { services, plan, isPlan } = useSelector((state) => state.service);
  const [countryCode, setCountryCode] = useState("+91");
  const [countryFlag, setCountryFlag] = useState(
    "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
  );
  const [pricing, setPricing] = useState(isPlan ? plan.price : "");

  useEffect(() => {
    dispatch(GetServiceData());
  }, []);

  const servicePlans = services.map((service) => service.plans);
  const serviceOptions = servicePlans.flat().map((plan) => {
    const data = {
      label: plan.title,
      value: plan.title,
      price: plan.our_price,
    };

    return data;
  });

  const handleCountryCodeChange = (selectedOption) => {
    setCountryCode(selectedOption.value.dial_code);
    setCountryFlag(selectedOption.value.flag);
  };

  const options = country_tel_code.map((country, index) => ({
    value: country,
    label: country.dial_code,
  }));

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
    plan: isPlan ? plan.value : "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    phone: Yup.string()
      .matches(/^[1-9]\d{9}$/, "Invalid phone number")
      .required("phone number is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("email address is required"),
    requirement: Yup.string().required("required"),
    plan: Yup.string().notOneOf([""]).required("Select a plan"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const data = {
      name: values.name,
      phone: countryCode + values.phone,
      email: values.email,
      requirement: values.requirement,
      price: pricing,
      plan: values.plan ? values.plan : planName,
    };

    try {
      dispatch(SendData(data));

      setSubmitting(false);
      setSubmit(true);
      toast({
        title: "Message Submitted",
        position: "top",
        description:
          "your response has submitted successfully we will contact you soon",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => navigation(isHome ? 0 : "/"), 1000);
    } catch (e) {
      toast({
        title: "Some Thing Went Wrong",
        position: "top",
        description: "Server error: " + e,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w={{ base: "100%", md: "50%" }}>
      <Box maxW="1200px" mx="auto" px={{ base: "2", md: "0" }}>
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          borderWidth='2px'
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
                        <FormLabel mb="2" fontWeight="semibold">
                          Name
                        </FormLabel>
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
                        <FormLabel mb="2" fontWeight="semibold">
                          Phone
                        </FormLabel>
                        <InputGroup>
                          <Select
                            value={{ value: countryCode, label: countryCode }}
                            onChange={handleCountryCodeChange}
                            options={options}
                            className=" w-48"
                            id="contact_form_select"
                            menuPlacement="top"
                          />
                          <Input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="contact_phone_input"
                            {...field}
                            isInvalid={form.errors.phone && form.touched.phone}
                          />
                          <InputRightAddon
                            children={
                              <Image
                                src={`data:image/png;base64,${countryFlag}`}
                                alt="Icon"
                              />
                            }
                          />
                        </InputGroup>

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
                        <FormLabel mb="2" fontWeight="semibold">
                          Email
                        </FormLabel>
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
                        <FormLabel mb="2" fontWeight="semibold">
                          Plan
                        </FormLabel>
                        <Selects
                          placeholder="Select Plan"
                          // value={planName}
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
                        </Selects>
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
                        <FormLabel mb="2" fontWeight="semibold">
                          Requirement
                        </FormLabel>
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
                    <FormLabel mb="2" fontWeight="semibold">
                      Price
                    </FormLabel>
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
