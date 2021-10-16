import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/Phonebook/phonebook-actions';
import { handleFilteredContacts } from '../../redux/Phonebook/phonebook-selectors';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss';

export default function ContactsList() {
  const friends = useSelector(handleFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {friends.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
