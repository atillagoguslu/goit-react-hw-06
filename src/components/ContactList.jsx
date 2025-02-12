import styles from "./ContactList.module.css";
import Contact from "./Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../redux/contactsSlice";
import {
  selectNameFilter,
  selectFilteredContacts,
  setFilteredContacts,
} from "../redux/filteredSlice";
import { useEffect } from "react";

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    dispatch(setFilteredContacts(filtered));
  }, [filter, contacts, dispatch]);

  if (filteredContacts.length === 0) {
    return (
      <div className={styles.contactListNotFound}>
        <p>No contacts found</p>
      </div>
    );
  }

  return (
    <div className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          className={styles.contactItem}
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </div>
  );
}

export default ContactList;
