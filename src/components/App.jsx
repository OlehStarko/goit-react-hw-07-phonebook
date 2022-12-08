import { ToastContainer } from 'react-toastify';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './css/phonebook.module.css';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <h1 className={css.form__title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.form__title}>Contacts</h2>
      <Filter />
      <ContactList />

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}
