import { Component } from 'react';
import { Section, Container, Title } from './Styled';
import TelbookForm from 'components/TelbookForm/TelbookForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Accent = styled.span`
  font-weight: 700;
  color: red;
`;
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isIncludeName = this.state.contacts.some(
      value => value.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludeNumber = this.state.contacts.some(
      value => value.number.split('-').join('') === number.split('-').join('')
    );

    if (isIncludeName) {
      toast.error(() => (
        <div>
          <Accent>{name}</Accent> is already in contacts
        </div>
      ));
      return;
    }
    if (isIncludeNumber) {
      toast.error(() => (
        <div>
          phonenumber <Accent>{number}</Accent> is already in contacts
        </div>
      ));
      return;
    }

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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}
