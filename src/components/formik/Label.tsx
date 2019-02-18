import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #222;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  span {
    color: hsl(10, 50%, 50%);
  }
`;

export { Label };
