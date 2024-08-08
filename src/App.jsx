import { useEffect, useState } from "react";
import contactsData from "./assets/data.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import s from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    return savedContact !== null ? savedContact : contactsData;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onFilter={setFilter} filter={filter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
