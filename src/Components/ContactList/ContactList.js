import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleItems  } from '../../redux/store';
import { deleteContact } from '../../redux/contacts/actions';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleItems);

  const dispatch = useDispatch();
  return (
    <>
      <ul className={styles.ContactList}>
        {contacts.map(({ name, number, id }) => (
        <li className={styles.ContactList_item} key={shortid.generate()}>
          {name} : {number}
          {
            <button
              className={styles.ContactList_button}
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </button>
          }
        </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};