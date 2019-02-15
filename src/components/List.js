import React from "react";
import styled from "styled-components";

const ListEmptyState = styled.h3`
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

const ListItem = ({ title, author, onClick }) => (
  <StyledListItem>
    <ListTitle>{title}</ListTitle>
    <ListSubTitle>{author}</ListSubTitle>
    <button type="button" onClick={onClick}>
      &times;
    </button>
  </StyledListItem>
);

const List = ({ items, removeListItem }) => {
  let entries = Object.entries(items);

  if (!entries) {
    return <ListEmptyState>No Books Found</ListEmptyState>;
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
