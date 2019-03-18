import { Field } from "formik";
import styled from "styled-components";

const StyledField = styled(Field)`
  &[type="text"],
  &[type="date"] {
    background: none;
    border: none;
    border-bottom: 1px solid #999;
    color: #222;
    padding: 0.25rem 0 0.25rem;
    font-size: 1.5rem;
    font-family: inherit;
    transition: border-color 0.1s ease;

    &:focus {
      outline: none;
      border-color: #222;
    }
  }
`;

export { StyledField as Field };
