import React from "react";
import { Subscribe } from "unstated";
import BookContainer from "../containers/BookContainer";

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
      {({ state }: BookContainer) => {
        const { title, author } = state.byId[match.params.id];
        return (
          <section style={{ padding: "0.75rem 1rem" }}>
            <h1>{title}</h1>
            <p>{author}</p>
          </section>
        );
      }}
    </Subscribe>
  );
};

export default SingleBook;
