import React from 'react';
import styled from 'styled-components';

const NavigationLink = styled.a`
  text-decoration: none;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: #000;
  }
`

const NavigationItem = ({ children, href, active }) => (
  <li>
    <NavigationLink href={href} active={active}>
      {children}
    </NavigationLink>
  </li>
);

const NavigationMenu = styled.ul`
  display: flex;
  height: 48px;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavigationBar = () => {
  return (
    <nav>
      <NavigationMenu>
        <NavigationItem active href="#read">read</NavigationItem>
        <NavigationItem href="#wishlist">wishlist</NavigationItem>
        <NavigationItem href="#discover">discover</NavigationItem>
      </NavigationMenu>
    </nav>
  );
};

export default NavigationBar;