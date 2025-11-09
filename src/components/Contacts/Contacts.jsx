import { useSelector } from "react-redux";
import styles from "./Contacts.module.scss";

export const Contacts = ({deleteContact}) => {
  const contacts = useSelector((state) => state.contacts.items)
  const filter = useSelector((state) => state.filter)
  console.log(filter)
  const filteredContacts = contacts.filter((contact) => contact.name.includes(filter))
  console.log(contacts)
  return (
    <>
      <h2 className={styles.subtitle}>Contacts</h2>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <p className={styles.text}>
              {contact.name}: {contact.phone}
            </p>
            <button
              className={styles.delete}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};