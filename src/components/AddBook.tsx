import React, { useState } from "react";
import { Subscribe } from "unstated";
import { Redirect } from "react-router";
import { Formik, Form, ErrorMessage } from "formik";
import BookContainer from "../containers/BookContainer";
import { Field, Label } from "./formik";
import Button from "./Button";

type ErrorsType = {
  author?: string | null;
  title?: string | null;
};

const AddBook = () => {
  const [hasSubmitted, updateSubmitted] = useState(false);

  if (hasSubmitted) {
    return <Redirect to="/" />;
  }

  return (
    <Subscribe to={[BookContainer]}>
      {({ addBook }: BookContainer) => (
        <>
          <h1 style={{ margin: "0 0 0.5em", fontSize: "4rem" }}>Search</h1>
          <Formik
            initialValues={{ title: "", author: "" }}
            onSubmit={(values, { setSubmitting }) => {
              addBook({ author: values.author, title: values.title }).then(
                () => {
                  setSubmitting(false);
                  updateSubmitted(true);
                }
              );
            }}
            validate={values => {
              let errors: ErrorsType = {};

              if (!values.author) {
                errors.author = "Required";
              }

              if (!values.title) {
                errors.title = "Required";
              }

              return errors;
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Label>
                  Title
                  <ErrorMessage name="title" component="span" />
                  <Field type="text" name="title" />
                </Label>
                <Label>
                  Author
                  <ErrorMessage name="author" component="span" />
                  <Field type="text" name="author" />
                </Label>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </Subscribe>
  );
};

export default AddBook;
