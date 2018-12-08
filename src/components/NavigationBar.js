import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const NavigationLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 0 1rem;
  height: 48px;

  &:after {
    content: "";
    position: absolute;
    text-align: center;
    bottom: 10px;
    visibility: ${props => (props.active ? "visible" : "hidden")};
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: #000;
  }
`;

const NavigationItem = ({ children, to, active }) => (
  <li>
    <Route
      path={to}
      exact
      children={({ match }) => (
        <NavigationLink to={to} active={match}>
          {children}
        </NavigationLink>
      )}
    />
  </li>
);

const NavigationMenu = styled.ul`
  display: flex;
  flex: 1 0 auto;
  height: 48px;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const AddButton = styled.button`
  border: none;
  background-color: #000;
  width: 48px;
  height: 48px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationBar = props => {
  return (
    <nav style={{ display: "flex" }}>
      <NavigationMenu>
        <NavigationItem active to="/">
          read
        </NavigationItem>
        <NavigationItem to="/wishlist">wishlist</NavigationItem>
        <NavigationItem to="/discover">discover</NavigationItem>
      </NavigationMenu>
      <AddButton
        onClick={() => {
          props.addNewBook({
            title: "The Kite Runner",
            author: "Khaled Hosseini",
            date_started: new Date().toJSON(),
            date_finished: null
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
        </svg>
      </AddButton>
    </nav>
  );
};

export default NavigationBar;
