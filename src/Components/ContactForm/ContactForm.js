import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from "shortid";
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/actions';
import { getContacts } from '../../redux/store';
function ContactForm({ addNewContact, onAdd }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const inputName = shortid.generate();
  const inputNumber = shortid.generate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const options = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (contacts.map(contact => contact.name).includes(options.name)) {
      alert(`${options.name} is already in contacts`);
    } else {
      dispatch(addContact(options));
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.ContactEditor} onSubmit={handleSubmit}>
      <label className={styles.ContactEditor_label}>
        Name
        <input
          className={styles.ContactEditor_input}
          id={inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.ContactEditor_label}>
        Number
        <input
          className={styles.ContactEditor_input}
          id={inputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={styles.ContactEditor_button} type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;