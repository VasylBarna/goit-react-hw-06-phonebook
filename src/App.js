import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList';
import styles from './App.module.scss';

export default function App() {
  return (
    <Container>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}
