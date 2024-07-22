import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/operations/contacts.operation";
import styles from "./ContactsList.module.scss";
import { useEffect } from "react";
import { selectAllContacts } from "../../redux/selectors/contacts.selector";
import Filter from "../Filter/Filter";

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <h2>Your contact list</h2>
      <Filter />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contact}>
            <span className={styles.contactName}> {contact.name}:</span>
            <span className={styles.contactNumber}>{contact.number}</span>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
