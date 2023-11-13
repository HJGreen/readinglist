import React, { useState } from "react";
import { Subscribe } from "unstated";
import { Redirect } from "react-router-dom";
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
        <section style={{ padding: "0.75rem 1rem" }}>
          <h1 style={{ margin: "0 0 0.5em" }}>Add a new book</h1>
          <Formik
            initialValues={{
              title: "",
              author: "",
              dateRead: new Date().toISOString().substr(0, 10),
            }}
            onSubmit={(values, { setSubmitting }) => {
              addBook({
                author: values.author,
                title: values.title,
                dateRead: values.dateRead,
              }).then(() => {
                setSubmitting(false);
                updateSubmitted(true);
              });
            }}
            validate={(values) => {
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
                  <Field
                    type="text"
                    name="title"
                    className="u-text-large"
                    autoFocus
                  />
                </Label>
                <Label>
                  Author
                  <ErrorMessage name="author" component="span" />
                  <Field type="text" name="author" className="u-text-large" />
                </Label>
                <Label>
                  Date Read
                  <Field type="date" name="dateRead" />
                </Label>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="u-block u-text-large"
                >
                  Add to Shelf
                </Button>
              </Form>
            )}
          </Formik>
        </section>
      )}
    </Subscribe>
  );
};

export default AddBook;
