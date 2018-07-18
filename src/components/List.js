import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = ({ title, author }) => (
  <li>
    <div>{title}</div>
    <div>{author}</div>
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
