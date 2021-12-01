import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/store';
import { filterValue } from '../../redux/contacts/actions';
const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.filter}>
        Find contacts by name
        <input 
          className={styles.filter_input}
          type="text"
          value={value}
          onChange={e => dispatch(filterValue(e.target.value))}
        />
      </div>
    </>
  );
};
export default Filter;