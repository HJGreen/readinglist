import React from "react";
import { Subscribe } from "unstated";
import BookContainer from "../containers/BookContainer";
import { Book } from "../model/Book";

const Statistics = () => {
  return (
    <Subscribe to={[BookContainer]}>
      {({ state }: BookContainer) => {
        const books: Array<Book> = Object.values(state.byId);
        const bookCount = books.length;
        const uniqueAuthors = books.reduce(
          (authors: Set<string>, book) => authors.add(book.author),
          new Set()
        );
        const authorCount = uniqueAuthors.size;
        return (
          <section style={{ padding: "0.75rem 1rem" }}>
            <h1>Statistics</h1>
            <dl>
              <dt>Books</dt>
              <dd>{bookCount}</dd>
              <dt>Authors</dt>
              <dd>{authorCount}</dd>
            </dl>
          </section>
        );
      }}
    </Subscribe>
  );
};

export default Statistics;
