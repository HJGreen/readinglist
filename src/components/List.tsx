import React, {ChangeEvent, useState} from "react";
import { compareDesc } from "date-fns";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bookshelf from "../img/book-shelf.png";
import { Book } from "../model/Book";

const ListEmptyState = styled.h2`
  text-align: center;
  font-weight: 400;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListTitle = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0;
`;

const ListSubTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
  color: hsl(0, 0%, 47%);
`;

const StyledListItem = styled.li`
  border-bottom: 1px solid hsl(0, 0%, 90%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListLink = styled(Link)`
  padding: 0.75rem 1rem;
  color: inherit;
  text-decoration: none;
  flex: 1 1 100%;
`;

const ListMeta = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid hsl(0, 0%, 90%);
`;

const FilterField = styled.input`
  background: hsl(0, 0%, 90%);
  border: none;
  color: hsl(0, 0%, 12%);
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  font-size: 0.875rem;
  font-family: inherit;
  flex: 1;
  border-radius: 6px;

  background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" fill="%23a6a6a6" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>');
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 0.75rem 50%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    //98 94 90 82 65 47 31 20 12
    color: hsl(0, 0%, 47%);
  }
`;

type ListItemProps = Book;

const ListItem: React.FunctionComponent<ListItemProps> = ({
  id,
  title,
  author
}) => (
  <StyledListItem>
    <ListLink to={`/books/${id}`}>
      <ListTitle>{title}</ListTitle>
      <ListSubTitle>{author}</ListSubTitle>
    </ListLink>
  </StyledListItem>
);

type ListProps = {
  items: Map<String, Book>;
};

const List: React.FunctionComponent<ListProps> = ({ items }) => {
  let entries: [string, Book][] = Object.entries(items);

  if (!entries.length) {
    return (
      <section style={{ textAlign: "center", margin: "2rem 0" }}>
        <img src={bookshelf} width="120" />
        <ListEmptyState>Your shelf is empty</ListEmptyState>
        <p>
          Add some books using
          <br />
          the <strong>Search</strong> button below
        </p>
      </section>
    );
  }

  const [searchQuery, updateSearchQuery] = useState("");

  return (
    <>
      <ListMeta>
        <FilterField
          type="text"
          defaultValue={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateSearchQuery(e.currentTarget.value)}
          placeholder="Search books"
        />
        <span style={{ fontSize: "0.875rem", marginTop: "0.75rem" }}>
          {entries.length} books
        </span>
      </ListMeta>
      <ListContainer>
        {entries
          .filter(
            ([, book]) =>
              book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.author.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .reverse()
          .sort(([_a, a], [_b, b]) => {
            return compareDesc(
              new Date(a.dateRead || 0),
              new Date(b.dateRead || 0)
            );
          })
          .map(([key, book]) => (
            <ListItem key={key} {...book} />
          ))}
      </ListContainer>
    </>
  );
};

export default List;
