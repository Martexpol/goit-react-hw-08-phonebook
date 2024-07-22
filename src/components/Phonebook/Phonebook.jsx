import { useDispatch, useSelector } from "react-redux";
import styles from "./Phonebook.module.scss";

import { addContact } from "../../redux/operations/contacts.operation";

export default function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const addContactForm = ev.currentTarget;
    const { name, number } = addContactForm.elements;
    const newContact = {
      name: name.value,
      number: number.value,
    };
    const contactExists = contacts.some(
      (contact) =>
        contact.name === newContact.name ||
        contact.number === newContact.number,
    );

    if (contactExists) {
      window.alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact)).then(() => {
      addContactForm.reset(); // Clear the form
    });
  };

  return (
    <div className={styles.container}>
      <form
        action="/addContact"
        className={styles.form}
        onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          // onChange={(ev) => setName(ev.target.value)}
        />

        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="^\+?[1-9]\d{1,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Phone number"
          // onChange={(ev) => setPhone(ev.target.value)}
        />
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
