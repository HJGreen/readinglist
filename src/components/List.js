import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;
`;

const ListTitle = styled.p`
  font-weight: 600;
  margin: 0 0 0.15rem;
`

const ListSubTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0 0 1rem;
`

const ListItem = ({ title, author }) => (
  <li>
    <ListTitle>{title}</ListTitle>
    <ListSubTitle>{author}</ListSubTitle>
  </li>
);

const List = ({ items }) => {
  return (
    <ListContainer>
      {items.map(item => <ListItem {...item} />)}
    </ListContainer>
  )
}

export default List
