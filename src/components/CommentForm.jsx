import { Formik, Field, Form } from "formik";
import { Box, Textarea, HStack, Avatar, Input, Button } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { CreateComment } from "../redux/slices/commentSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = (values, actions) => {
    const data = { name: values.name, text: values.text, blog: id };
    dispatch(CreateComment(data));
    actions.resetForm();
    navigation(0);
  };

  return (
    <Formik initialValues={{ text: "", name: "" }} onSubmit={handleSubmit}>
      <Form>
        <Box mb={10}>
          <Field name="text">
            {({ field }) => (
              <Textarea {...field} placeholder="Enter your comment" mb={4} />
            )}
          </Field>
          <HStack>
            <Avatar as={FaUserCircle} size="md" mr={2} />
            <Field name="name">
              {({ field }) => (
                <Input {...field} placeholder="Your name" w="100%" mr={2} />
              )}
            </Field>
            <Button type="submit" colorScheme="purple">
              Comment
            </Button>
          </HStack>
        </Box>
      </Form>
    </Formik>
  );
};

export default CommentForm;
