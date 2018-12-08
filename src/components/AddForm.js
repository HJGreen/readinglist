import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const Form = styled.form`
  background: #000;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 0 auto;
`;

const InputGroupLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const InputGroupContainer = styled.div`
  margin-bottom: 1rem;
`;

const InputGroup = ({ label, children }) => (
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
  border-bottom: 1px solid #333;
  color: #fff;
  padding: 0.5rem 0 0.25rem;
  font-size: 1rem;
  font-family: "Archivo", sans-serif;
  transition: border-color 0.1s ease;

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

const InputCheck = styled.input`
  border: 1px solid #333;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0 0;

  &:focus {
    outline: none;
    border-color: #666;
  }

  &:checked {
    background-color: #333;
    border-color: #333;
    box-shadow: inset 0 0 0px 1px #000;
  }
`;

const Button = styled.button`
  padding: 0.75em 0 0.6em;
  font-family: "Archivo", sans-serif;
  background: #222;
  color: #ccc;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  font-weight: 600;
  box-shadow: inset 0 0 0 1px #000;
  border: 1px solid #222;

  &:focus {
    background: #fff;
    color: #333;
    border-color: #fff;
    outline: none;
  }
`;

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      read: false,
      submitted: false
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { addNewBook } = this.props;

    addNewBook({ title: this.state.title, author: this.state.author });

    this.setState(prevState => ({
      ...prevState,
      submitted: true
    }));
  };

  handleChange = (evt, a) => {
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
            value={read}
            onChange={this.handleChange}
          />
        </InputGroup>
        <Button>Save</Button>
      </Form>
    );
  }
}

export default AddForm;
