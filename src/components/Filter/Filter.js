import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/Phonebook/phonebook-actions';
import { getFilter } from '../../redux/Phonebook/phonebook-selectors';
import styles from './Filter.module.scss';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.find}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={event => dispatch(actions.handleFilter(event.target.value))}
      />
    </label>
  );
}
