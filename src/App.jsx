import "./App.css";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Statistics from "./components/Statistics.jsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/store.js";


function App() {
  const [search, setSearch] = useState("");
  const contactsRedux = useSelector((state) => state.contactsInRedux);
  const dispatch = useDispatch(); // Dispatch, Aksiyonları çalıştırmak için kullanılır.

  useEffect(() => {
  }, []);

  const filteredContacts = contactsRedux.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
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
