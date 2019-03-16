import React from "react";
import { Subscribe } from "unstated";
import BookContainer from "../containers/BookContainer";

type SingleBookType = {
  match: {
    id: string;
  };
};

const SingleBook = function({ match }: SingleBookType) {
  return (
    <Subscribe to={[BookContainer]}>
      {({ state }: BookContainer) => {
        console.log(state.byId[match.id]);
        return <h2>{state.byId[match.id].title}</h2>;
      }}
    </Subscribe>
  );
};

export default SingleBook;
