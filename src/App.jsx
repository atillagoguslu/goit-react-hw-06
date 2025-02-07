import "./App.css";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Statistics from "./components/Statistics.jsx";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const ContactDatabase = [
  { id: nanoid(8), name: "Rosie Simpson", number: "459-12-56" },
  { id: nanoid(8), name: "Hermione Kline", number: "443-89-12" },
  { id: nanoid(8), name: "Eden Clements", number: "645-17-79" },
  { id: nanoid(8), name: "Annie Copeland", number: "227-91-26" },
  { id: nanoid(8), name: "John Doe", number: "123-45-67" },
  { id: nanoid(8), name: "Jane Smith", number: "789-01-23" },
  { id: nanoid(8), name: "Alice Johnson", number: "345-67-89" },
  { id: nanoid(8), name: "Bob Brown", number: "901-23-45" },
  { id: nanoid(8), name: "Charlie Davis", number: "567-89-01" },
  { id: nanoid(8), name: "Diana White", number: "234-56-78" },
  { id: nanoid(8), name: "Ethan Green", number: "876-54-32" },
  { id: nanoid(8), name: "Fiona Black", number: "112-35-79" },
  { id: nanoid(8), name: "George Blue", number: "456-78-90" },
  { id: nanoid(8), name: "Hannah Purple", number: "789-01-23" },
  { id: nanoid(8), name: "Ian Orange", number: "321-45-67" },
];

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(ContactDatabase);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleAddContact = (contact) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <div className="container">
      <h1 className="phonebook-title">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox search={search} onSearchChange={setSearch} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      <Statistics contacts={filteredContacts} />
    </div>
  );
}

export default App;
