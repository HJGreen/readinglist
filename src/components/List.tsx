import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bookshelf from "../img/book-shelf.png";

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
  border-bottom: 1px solid hsl(0, 0%, 90%);
`;

const FilterField = styled.input`
  background: hsl(0, 0%, 90%);
  border: none;
  color: hsl(0, 0%, 12%);
  padding: 0.5rem 1rem 0.5rem 2.5rem;
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
            ([, book]) =>
              book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.author.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .sort((a, b) => {
            return a[1].dateRead < b[1].dateRead ? 1 : -1;
          })
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
