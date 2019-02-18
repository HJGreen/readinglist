import styled from "styled-components";

const Button = styled.button`
  padding: 0 1rem;
  background: #222;
  color: #f2f2f2;
  text-transform: uppercase;
  font-size: 1.125rem;
  height: 2.5em;
  line-height: 2.5em;
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

  &:disabled {
    opacity: 0.6;
  }
`;

export default Button;