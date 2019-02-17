import React, { Component, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Book } from "../model/Book";

const Form = styled.form`
  background: #f2f2f2;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 0 auto;
`;

const InputGroupLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #222;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

const InputGroupContainer = styled.div`
  margin-bottom: 1.5rem;
`;

type InputGroupProps = {
  label: string;
  children?: React.ReactNode;
};

const InputGroup: React.FC<InputGroupProps> = ({ label, children }) => (
  <InputGroupContainer>
    <InputGroupLabel>
      {label}
      {children}
    </InputGroupLabel>
  </InputGroupContainer>
);

const InputText = styled.input`
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
`;

const InputCheck = styled.input`
  border: 1px solid #333;
  appearance: none;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem 0 0;

  &:focus {
    outline: none;
    border-color: #666;
  }

  &:checked {
    background-color: #333;
    border-color: #333;
    box-shadow: inset 0 0 0px 1px #ccc;
  }
`;

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
`;

type State = {
  title: string;
  author: string;
  read: boolean;
  submitted: boolean;
};

type Props = {
  addNewBook: (book: Book) => void;
};

class AddForm extends Component<Props, State> {
  state = {
    title: "",
    author: "",
    read: false,
    submitted: false
  };

  handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { addNewBook } = this.props;

    addNewBook({ title: this.state.title, author: this.state.author });

    this.setState(prevState => ({
      ...prevState,
      submitted: true
    }));
  };

  handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  render() {
    const { author, title, read, submitted } = this.state;

    if (submitted) {
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1 style={{ margin: "0 0 0.5em", fontSize: "4rem" }}>Search</h1>
        <InputGroup label="Title">
          <InputText
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </InputGroup>
        <InputGroup label="Author">
          <InputText
            type="text"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
        </InputGroup>
        <InputGroup label="Read?">
          <InputCheck
            type="checkbox"
            name="read"
            value={`${read}`}
            onChange={this.handleChange}
          />
        </InputGroup>
        <Button>Save</Button>
      </Form>
    );
  }
}

export default AddForm;
