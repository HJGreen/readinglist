import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Item = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  text-align: center;
  padding: 0.5rem 1.5rem;
  height: 2.5rem;
  font-size: 10px;
  opacity: 0.5;

  &.is-active {
    opacity: 1;
  }

  svg {
    flex: 0 0 auto;
  }
`;

const Icon = ({
  to,
  children,
  icon
}: {
  to: string;
  children: any;
  icon: string;
}) => {
  return (
    <Item to={to} activeClassName="is-active">
      {icon == "stats" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z" />
        </svg>
      )}
      {icon == "plus" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z" />
        </svg>
      )}
      {icon == "shelf" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 3H6c-1.1 0-2 .9-2 2v14h16V5a2 2 0 0 0-2-2zM6 5h12v3H6V5zm12 5H6v3h12v-3zm0 5H6v3h12v-3zM5 21a1 1 0 0 0 1-1h12a1 1 0 1 0 2 0v-1H4v1a1 1 0 0 0 1 1z"
          />
        </svg>
      )}
      {icon == "search" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      )}
      {icon == "menu" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      )}
      <span>{children}</span>
    </Item>
  );
};

const Button = styled(Item)`
  color: white;
  background: black;
  font-weight: 500;
`;

const NavigationList = styled.ul`
  display: flex;
  flex: 1 0 auto;
  justify-content: space-around;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;

type NavigationProps = {};
class Navigation extends React.Component<NavigationProps> {
  static Button = Button;
  static Item = Item;
  static Icon = Icon;

  render() {
    return (
      <nav>
        <NavigationList>
          {React.Children.map(this.props.children, child => (
            <li>{child}</li>
          ))}
        </NavigationList>
      </nav>
    );
  }
}

export default Navigation;
