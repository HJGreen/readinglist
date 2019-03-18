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
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.1s ease;
    width: 100%;

    &:focus {
      outline: none;
      border-color: #222;
    }
  }

  &.u-text-large {
    font-size: 1.5rem;
  }
`;

export { StyledField as Field };
