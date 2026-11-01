import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact
} from "./api/contactApi";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
  const loadContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error loading contacts:", error.message);
    }
  };

  loadContacts();
}, []);

  const handleAddContact = async (contact) => {
    const newContact = await createContact(contact);

    setContacts((previousContacts) => [
      ...previousContacts,
      newContact
    ]);
  };

  const handleUpdateContact = async (id, updatedContact) => {
    const updated = await updateContact(id, updatedContact);

    setContacts((previousContacts) =>
      previousContacts.map((contact) =>
        contact._id === id ? updated : contact
      )
    );
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);

    setContacts((previousContacts) =>
      previousContacts.filter((contact) => contact._id !== id)
    );
  };

  return (
    <main className="app">
      <header className="page-header">
        <div className="brand">
          <span className="brand-mark">V</span>
          <span>verdant<span className="brand-dot">.</span></span>
        </div>

        <span className="header-label">PERSONAL WORKSPACE</span>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">YOUR PEOPLE, ORGANIZED</p>
          <h1>Contact <span>Manager.</span></h1>
          <p className="hero-description">
            A thoughtful space to keep your important connections
            organized and within reach.
          </p>
        </div>

        <div className="hero-decoration">
          <span>V</span>
        </div>
      </section>

      <section className="dashboard">
        <ContactForm onAddContact={handleAddContact} />

        <ContactList
          contacts={contacts}
          onUpdateContact={handleUpdateContact}
          onDeleteContact={handleDeleteContact}
        />
      </section>

      <footer className="page-footer">
        <span>VERDANT © 2026</span>
        <span>Keep your connections growing.</span>
      </footer>
    </main>
  );
}

export default App;
