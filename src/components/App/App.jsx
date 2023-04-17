import { Component } from 'react';
import { Section, Container, Title } from './Styled';
import TelbookForm from 'components/TelbookForm/TelbookForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContactsByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContactsByName = this.filteredContactsByName();

    return (
      <>
        <Section>
          <Container>
            <Title>Phonebook</Title>
            <TelbookForm onSubmit={this.addContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            <Title>Contacts</Title>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={filteredContactsByName}
              onDeleteContact={this.deleteContact}
            />
          </Container>
        </Section>
      </>
    );
  }
}
