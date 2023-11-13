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
        let uniqueAuthors = new Set();

        books.forEach(
          (book) => uniqueAuthors.add(book.author),
        );
        
        const authorCount = uniqueAuthors.size;
        const mostRecent = books.reduce((mostRecent, book) => {
          if (
            book.dateRead &&
            new Date(book.dateRead) > new Date(mostRecent.dateRead || 0)
          ) {
            mostRecent = book;
            return mostRecent;
          }
          return mostRecent;
        }, books[0]);
        return (
          <section style={{ padding: "0.75rem 1rem" }}>
            <h1>Statistics</h1>
            <p>
              To date, you have read <strong>{bookCount}</strong> books by a
              total of <strong>{authorCount}</strong> authors.
            </p>
            <p>
              The latest addition to your library was{" "}
              <strong>{mostRecent.title}</strong> by{" "}
              <strong>{mostRecent.author}</strong>, which you completed on{" "}
              <strong>
                {new Date(mostRecent.dateRead || 0).toLocaleDateString()}
              </strong>
            </p>
          </section>
        );
      }}
    </Subscribe>
  );
};

export default Statistics;
