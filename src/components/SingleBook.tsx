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
            <h1>{title}</h1>
            <p>{author}</p>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                updateBook(id, { dateRead: values.dateRead }).then(() => {
                  setSubmitting(false);
                });
              }}
              initialValues={{
                dateRead: new Date(dateRead).toISOString().substr(0, 10)
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Label>
                    Date Read
                    <Field type="date" name="dateRead" />
                  </Label>
                  <Button type="submit" disabled={isSubmitting}>
                    Save
                  </Button>
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
