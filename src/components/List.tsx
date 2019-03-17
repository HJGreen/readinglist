import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bookshelf from "../img/book-shelf.png";
import { Field } from "./formik";

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
`;

const StyledListItem = styled.li`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListLink = styled(Link)`
  padding: 0.75rem 1rem;
  color: inherit;
  text-decoration: none;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  color: #f2f2f2;
  text-transform: uppercase;
  font-size: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  font-family: inherit;
  letter-spacing: 0.075em;
  font-weight: 500;
  box-shadow: inset 0 0 0 1px #ccc;
  border: 1px solid #333;

  &:focus {
    background: #fff;
    color: #333;
    border-color: #fff;
    outline: none;
  }
`;

const ListMeta = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #ddd;
`;

const FilterField = styled.input`
  background: #e5e5e5;
  border: none;
  color: #222;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-family: inherit;
  flex: 1;
  border-radius: 6px;

  &:focus {
    outline: none;
  }
`;

type ListItemProps = {
  id: string;
  title: string;
  author: string;
  onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
};

const ListItem: React.FunctionComponent<ListItemProps> = ({
  id,
  title,
  author,
  onClick
}) => (
  <StyledListItem>
    <ListLink to={`/book/${id}`}>
      <ListTitle>{title}</ListTitle>
      <ListSubTitle>{author}</ListSubTitle>
    </ListLink>

    {/* <IconButton type="button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
      >
        <path
          fill="currentColor"
          d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
        />
      </svg>
    </IconButton> */}
  </StyledListItem>
);

type ListProps = {
  items: Object;
  removeListItem: (id: string) => void;
};

const List: React.FunctionComponent<ListProps> = ({
  items,
  removeListItem
}) => {
  let entries = Object.entries(items);

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
          onChange={e => updateSearchQuery(e.currentTarget.value)}
          placeholder="Search books"
        />
        <span style={{ fontSize: "0.875rem", marginTop: "0.75rem" }}>
          {entries.length} books
        </span>
      </ListMeta>
      <ListContainer>
        {entries
          .filter(
            ([key, book]) =>
              book.title.includes(searchQuery) ||
              book.author.includes(searchQuery)
          )
          .map(([key, book]) => (
            <ListItem
              key={key}
              onClick={() => {
                removeListItem(key);
              }}
              {...book}
            />
          ))}
      </ListContainer>
    </>
  );
};

export default List;
