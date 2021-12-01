import { createReducer } from '@reduxjs/toolkit';
const initState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsList = createReducer(initState, {
  'contact/add': (state, { payload }) => [...state, payload],
  'contact/delete': (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
export const contactFilter = createReducer('', {
  'filter/value': (_, { payload }) => payload,
});