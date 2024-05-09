import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  // Test List
  const InitialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedContacts");
    return savedContacts !== null ?
      (JSON.parse(savedContacts)) : InitialContacts;
  });

  useEffect(() => { 
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts)), [contacts]
  });

  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContact((oldContacts) => {
      return [...oldContacts, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setContact((oldContacts) => {
      return oldContacts.filter(contact => contact.id !== contactId);
    })
  }

  const visibleContacts = contacts.filter((contactItem) =>
    contactItem.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList Contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}
