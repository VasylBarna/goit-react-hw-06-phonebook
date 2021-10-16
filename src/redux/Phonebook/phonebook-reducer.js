import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';
import saveContacts from '../../data/saveContacts.json';

const items = createReducer(saveContacts, {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.handleFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
