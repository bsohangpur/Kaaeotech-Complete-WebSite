import { useState } from "react";
import {
  Box,
  Heading,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineUpload } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { SendData } from "../redux/slices/careerSlice";

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

const Career = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      // Send hiring request here
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
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
    <Box p={4}>
      <Box className="flex flex-col items-center mt-5">
        <Heading as="h1" mb={4}>
          Join Us
        </Heading>

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
                      <Input
                        {...field}
                        id="email"
                        placeholder="Email address"
                      />
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
                      <Input {...field} id="phone" placeholder="Phone number" />
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
                      <FormErrorMessage>
                        {form.errors.position}
                      </FormErrorMessage>
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
                      <FormErrorMessage>
                        {form.errors.location}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="experience">
                  {({ field, form }) => (
                    <FormControl
                      mb={4}
                      isInvalid={
                        form.errors.experience && form.touched.experience
                      }
                    >
                      <FormLabel htmlFor="experience">Experience</FormLabel>
                      <Input
                        {...field}
                        id="experience"
                        placeholder="Experience"
                      />
                      <FormErrorMessage>
                        {form.errors.experience}
                      </FormErrorMessage>
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
      </Box>
    </Box>
  );
};

export default Career;
