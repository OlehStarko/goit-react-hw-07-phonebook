import React from 'react';
import css from '../css/phonebook.module.css';
import { PreLoader } from './ContactList.styled';
import { Contact } from './Contact';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
  const { filteredContacts, isLoading, error } = useContacts();

  const isError = error ? (
    error.data
  ) : (
    <ul className={css.contact__list}>
      {filteredContacts.map(x => (
        <Contact data={x} key={`${x.id}${x.phone}`} />
      ))}
    </ul>
  );

  return <>{isLoading ? <PreLoader /> : isError}</>;
};
