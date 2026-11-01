import { useState } from "react";

function ContactList({
  contacts,
  onUpdateContact,
  onDeleteContact
}) {
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const filteredContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleEdit = (contact) => {
    setEditingId(contact._id);

    setEditData({
      name: contact.name || "",
      email: contact.email || "",
      phone: contact.phone || "",
      company: contact.company || ""
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await onUpdateContact(editingId, editData);
    setEditingId(null);
  };

  return (
    <section className="panel contacts-panel">
      <div className="panel-heading contacts-heading">
        <div>
          <p className="eyebrow">YOUR NETWORK</p>
          <h2>All contacts</h2>
          <p className="panel-description">
            Your personal contact directory.
          </p>
        </div>

        <span className="contact-count">
          {contacts.length} CONTACTS
        </span>
      </div>

      <div className="search-container">
        <span className="search-icon">⌕</span>
        <input
          type="search"
          placeholder="Search your contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredContacts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-illustration">
            <div className="illustration-circle">
              <span>♧</span>
            </div>
            <span className="floating-dot dot-one"></span>
            <span className="floating-dot dot-two"></span>
            <span className="floating-dot dot-three"></span>
          </div>

          <h3>
            {contacts.length === 0
              ? "Your network starts here."
              : "No contacts found."}
          </h3>

          <p>
            {contacts.length === 0
              ? "You haven't added any contacts yet. Your connections will appear here once you get started."
              : "Try searching with a different name or email address."}
          </p>

          <span className="empty-caption">
            A LITTLE SPACE TO GROW
          </span>
        </div>
      ) : (
        <div className="contacts-list">
          {filteredContacts.map((contact) => (
            <div className="contact-item" key={contact._id}>
              {editingId === contact._id ? (
                <form onSubmit={handleUpdate}>
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    placeholder="Full name"
                    required
                  />

                  <input
                    name="email"
                    type="email"
                    value={editData.email}
                    onChange={handleEditChange}
                    placeholder="Email address"
                    required
                  />

                  <input
                    name="phone"
                    value={editData.phone}
                    onChange={handleEditChange}
                    placeholder="Phone number"
                  />

                  <input
                    name="company"
                    value={editData.company}
                    onChange={handleEditChange}
                    placeholder="Company"
                  />

                  <button type="submit">Save</button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <h3>{contact.name}</h3>
                  <p>{contact.email}</p>
                  {contact.phone && <p>{contact.phone}</p>}
                  {contact.company && <p>{contact.company}</p>}

                  <button
                    type="button"
                    onClick={() => handleEdit(contact)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => onDeleteContact(contact._id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="contacts-footer">
        <span>CONTACT DIRECTORY</span>
        <span>{contacts.length} RECORDS</span>
      </div>
    </section>
  );
}

export default ContactList;
