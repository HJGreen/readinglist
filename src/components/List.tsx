import React from "react";
import styled from "styled-components";
import bookshelf from "../img/book-shelf.png";

const ListEmptyState = styled.h2`
  text-align: center;
  font-weight: 400;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0 1rem;
  margin: 0;
`;

const ListTitle = styled.p`
  font-weight: 600;
  margin: 0 0 0.15rem;
`;

const ListSubTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
`;

const StyledListItem = styled.li`
  padding: 0.5rem 0;
`;

type ListItemProps = {
  title: string;
  author: string;
  onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
};

const ListItem: React.FunctionComponent<ListItemProps> = ({
  title,
  author,
  onClick
}) => (
  <StyledListItem>
    <ListTitle>{title}</ListTitle>
    <ListSubTitle>{author}</ListSubTitle>
    <button type="button" onClick={onClick}>
      &times;
    </button>
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
      <section style={{ textAlign: "center", margin: '2rem 0' }}>
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

  return (
    <ListContainer>
      {entries.map(item => (
        <ListItem
          key={item[0]}
          onClick={() => {
            removeListItem(item[0]);
          }}
          {...item[1]}
        />
      ))}
    </ListContainer>
  );
};

export default List;