import React, { Component } from 'react';
import { List } from './Styled';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
  };

  render() {
    const { onDeleteContact } = this.props;
    return (
      <List>
        {this.props.contacts.length > 0 &&
          this.props.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: <span>{number}</span>
              </p>
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
      </List>
    );
  }
}
