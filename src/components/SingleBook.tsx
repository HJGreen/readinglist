import React from "react";
import { Subscribe } from "unstated";
import BookContainer from "../containers/BookContainer";
import { Label, Field } from "./formik";
import { Formik, Form } from "formik";
import Button from "./Button";

type SingleBookType = {
  match: {
    params: {
      id: string;
    };
  };
};

const SingleBook = function({ match }: SingleBookType) {
  return (
    <Subscribe to={[BookContainer]}>
      {({ state, updateBook }: BookContainer) => {
        const { id, title, author, dateRead } = state.byId[match.params.id];
        return (
          <section style={{ padding: "0.75rem 1rem" }}>
            <h1 style={{ fontSize: "1.125rem", fontWeight: 600 }}>{title}</h1>
            <p>{author}</p>
            <Formik
              onSubmit={(values, { setSubmitting, resetForm }) => {
                updateBook(id, { dateRead: values.dateRead }).then(() => {
                  setSubmitting(false);
                  resetForm();
                });
              }}
              initialValues={{
                dateRead: dateRead
                  ? new Date(dateRead).toISOString().substr(0, 10)
                  : ""
              }}
            >
              {({ isSubmitting, dirty }) => (
                <Form>
                  <Label>
                    Date Read
                    <Field type="date" name="dateRead" />
                  </Label>
                  {dirty && (
                    <Button type="submit" disabled={isSubmitting}>
                      Save Changes
                    </Button>
                  )}
                </Form>
              )}
            </Formik>
          </section>
        );
      }}
    </Subscribe>
  );
};

export default SingleBook;
