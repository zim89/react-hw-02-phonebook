import React, { Component } from 'react';
import { Label, Form, Input, Button } from './Styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class TelbookForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = { ...INITIAL_STATE };

  nameInputId = nanoid(10);
  numberInputId = nanoid(10);

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} autoComplete="off">
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          id={this.nameInputId}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <Label htmlFor={this.numberInputId}>Number</Label>
        <Input
          id={this.numberInputId}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
