import { useState } from "react";
import {
  Box,
  Heading,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Image,
  InputGroup,
  InputRightAddon,
  Button,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineUpload } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { SendData } from "../redux/slices/careerSlice";
import { country_tel_code } from "../data";
import Select from "react-select";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  position: Yup.string().required("Position is required"),
  location: Yup.string().required("Location is required"),
  experience: Yup.string().required("Experience is required"),
  message: Yup.string().required("Message is required"),
  resume: Yup.mixed()
    .test("fileSize", "File size too large (max 1.5MB)", (value) => {
      return !value || (value && value.size <= 1500000);
    })
    .test(
      "fileType",
      "Unsupported file type (only pdf, doc, docx)",
      (value) => {
        return !value || (value && /pdf|doc|docx/.test(value.type));
      }
    ),
});

const CareerForm = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState("+91");
  const [countryFlag, setCountryFlag] = useState(
    "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
  );

  const handleCountryCodeChange = (selectedOption) => {
    setCountryCode(selectedOption.value.dial_code);
    setCountryFlag(selectedOption.value.flag);
  };

  const options = country_tel_code.map((country, index) => ({
    value: country,
    label: country.dial_code,
  }));

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      // Send hiring request here
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", countryCode + values.phone);
      formData.append("position", values.position);
      formData.append("location", values.location);
      formData.append("experience", values.experience);
      formData.append("message", values.message);
      formData.append("resume", values.resume);
      dispatch(SendData(formData));
      toast({
        title: "Hiring request sent!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      resetForm();
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send hiring request.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className=" w-full md:w-4/5 lg:w-3/5">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position: "",
          location: "",
          experience: "",
          message: "",
          resume: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl
                  mb={4}
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel htmlFor="name">Full name</FormLabel>
                  <Input {...field} id="name" placeholder="Full name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  mb={4}
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input {...field} id="email" placeholder="Email address" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone">
              {({ field, form }) => (
                <FormControl
                  mb={4}
                  isInvalid={form.errors.phone && form.touched.phone}
                >
                  <FormLabel htmlFor="phone">Phone number</FormLabel>
                  <InputGroup>
                    <Select
                      value={{ value: countryCode, label: countryCode }}
                      onChange={handleCountryCodeChange}
                      options={options}
                      className="appointment_phone_select w-48"
                      menuPlacement="top"
                    />
                    <Input
                      {...field}
                      id="phone"
                      placeholder="Phone number"
                      className="contact_phone_input"
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

                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="position">
              {({ field, form }) => (
                <FormControl
                  mb={4}
                  isInvalid={form.errors.position && form.touched.position}
                >
                  <FormLabel htmlFor="position">Position</FormLabel>
                  <Input {...field} id="position" placeholder="Position" />
                  <FormErrorMessage>{form.errors.position}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="location">
              {({ field, form }) => (
                <FormControl
                  mb={4}
                  isInvalid={form.errors.location && form.touched.location}
                >
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <Input {...field} id="location" placeholder="Location" />
                  <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="experience">
              {({ field, form }) => (
                <FormControl
                  mb={4}
                  isInvalid={form.errors.experience && form.touched.experience}
                >
                  <FormLabel htmlFor="experience">Experience</FormLabel>
                  <Input {...field} id="experience" placeholder="Experience" />
                  <FormErrorMessage>{form.errors.experience}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }) => (
                <FormControl
                  mb={4}
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea {...field} id="message" placeholder="Message" />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="resume">
              {({ form, meta }) => (
                <FormControl mb={4} isInvalid={meta.error && meta.touched}>
                  <FormLabel htmlFor="resume">Upload resume</FormLabel>
                  <Box
                    p={2}
                    borderWidth="1px"
                    borderRadius="md"
                    borderStyle="dashed"
                    borderColor="gray.400"
                    _hover={{ borderColor: "gray.500" }}
                    _focus={{ outline: "none", boxShadow: "outline" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={4}
                    py={2}
                    color="gray.500"
                    cursor="pointer"
                    onClick={() => {
                      document.getElementById("resumeInput").click();
                    }}
                  >
                    <Box as={AiOutlineUpload} mr={2} />
                    {form.values.resume ? (
                      <Box>
                        {form.values.resume.name} (
                        {(form.values.resume.size / 1000000).toFixed(2)} MB)
                      </Box>
                    ) : (
                      <Box>Click to select a file</Box>
                    )}
                    <input
                      id="resumeInput"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(event) => {
                        form.setFieldValue(
                          "resume",
                          event.currentTarget.files[0]
                        );
                      }}
                      style={{ display: "none" }}
                    />
                  </Box>
                  <FormErrorMessage>
                    {meta.error && meta.touched && (
                      <Box mt={1} color="red.500" fontSize="sm">
                        {meta.error}
                      </Box>
                    )}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              isLoading={isLoading}
              disabled={!formik.isValid}
              mt={4}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CareerForm;
