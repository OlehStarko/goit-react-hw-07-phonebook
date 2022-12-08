import React from 'react';
import { useContactForm } from 'hooks/useContactForm';
import css from '../css/phonebook.module.css';

export const ContactForm = () => {
  const { name, setName, phone, setPhone, onSubmit } = useContactForm();

  return (
    <div className={css.form__container}>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          <p className={css.input__description}>Name</p>
          <input
            className={css.form__input}
            onChange={e => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Contact name"
          />
        </label>

        <label htmlFor="number">
          <p className={css.input__description}>Number</p>
          <input
            className={css.form__input}
            onChange={e => setPhone(e.target.value)}
            value={phone}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone number"
          />
        </label>
        <div>
          <button className={css.add__button} type="submit">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};
