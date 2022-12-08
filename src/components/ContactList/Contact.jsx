import css from '../css/phonebook.module.css';
import { useDelete } from '../../hooks/useDelete';

export const Contact = ({ data: { phone, id, name } }) => {
  const { deleteContact, isLoading } = useDelete();

  return (
    <li className={css.contact__item}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={css.delete__button}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      ></button>
    </li>
  );
};
