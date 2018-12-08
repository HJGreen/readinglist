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

const ListItem = ({ title, author }) => (
  <StyledListItem>
    <ListTitle>{title}</ListTitle>
    <ListSubTitle>{author}</ListSubTitle>
  </StyledListItem>
);

const List = ({ items }) => {
  if (!items) {
    return <ListEmptyState>No Books Found</ListEmptyState>;
  }

  return (
    <ListContainer>
      {items.map(item => (
        <ListItem {...item} />
      ))}
    </ListContainer>
  );
};

export default List;
