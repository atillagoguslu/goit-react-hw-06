import styles from "./ContactList.module.css";
import Contact from "./Contact.jsx";

function LogToConsole(contact) {
  console.log(
    "Deleted Contact:\n" +
      "  ID: " +
      contact.id +
      "\n" +
      "  Name: " +
      contact.name +
      "\n" +
      "  Number: " +
      contact.number
  );
}

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return (
      <div className={styles.contactListNotFound}>
        <p>No contacts found</p>
      </div>
    );
  } else {
    return (
      <div className={styles.contactList}>
        {contacts.map((contact) => (
          <Contact
            className={styles.contactItem}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => {
              onDelete(contact.id);
              LogToConsole(contact);
            }}
          />
        ))}
      </div>
    );
  }
}

export default ContactList;
