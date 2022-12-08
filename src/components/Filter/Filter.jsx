import { useSelector, useDispatch } from 'react-redux';
import css from '../css/phonebook.module.css';
import { setFilter } from 'redux/filterContacts';
import { getFilterContacts } from 'redux/filterContacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);
  return (
    <label className={css.filter__container}>
      <p className={css.input__description}> Find contacts by name</p>
      <input
        className={css.filter__input}
        onChange={event =>
          dispatch(setFilter(event.target.value.toLowerCase()))
        }
        type="filter"
        value={filter}
        name="filter"
      />
    </label>
  );
};
