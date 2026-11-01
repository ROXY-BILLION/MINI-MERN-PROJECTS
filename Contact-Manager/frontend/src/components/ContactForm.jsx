import { useState } from "react";

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }

    await onAddContact(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: ""
    });
  };

  return (
    <section className="panel form-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">NEW CONNECTION</p>
          <h2>Add a contact</h2>
          <p className="panel-description">
            Enter the details of your new connection.
          </p>
        </div>

        <span className="panel-icon">+</span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">FULL NAME</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Alex Morgan"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="alex@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">PHONE NUMBER</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">COMPANY / ORGANIZATION</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Where they work"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Add contact <span>↗</span>
        </button>
      </form>

      <p className="form-note">
        <span>✳</span> Your connections, all in one place.
      </p>
    </section>
  );
}

export default ContactForm;
