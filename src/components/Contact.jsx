import styles from "./Contact.module.css";

function Contact({ name, number, onDelete }) {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      onDelete();
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactCard}>
        <div className={styles.userInfo}>
          <div className={styles.name}>
            <span>{name}</span>
          </div>
          <div className={styles.phone}>
            <span>{number}</span>
          </div>
        </div>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
