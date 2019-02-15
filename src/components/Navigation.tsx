import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  text-align: center;
  padding: 8px 24px;
  height: 2.5em;
  line-height: 2.5em;
  margin-left: 12px;
  font-size: 18px;
`;

const Button = styled(Item)`
  color: white;
  background: black;
  font-weight: 500;
`;

const NavigationList = styled.ul`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  padding: 4px;
`;

type NavigationProps = {};
class Navigation extends React.Component<NavigationProps> {
  static Button = Button;
  static Item = Item;

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
