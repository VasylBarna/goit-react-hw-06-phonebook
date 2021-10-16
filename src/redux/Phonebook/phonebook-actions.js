import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      name: name,
      number,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction('contacts/delete');

const handleFilter = createAction('contscts/filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContact,
  deleteContact,
  handleFilter,
};
