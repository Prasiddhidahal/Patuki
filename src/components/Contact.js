import React, { useState } from "react";
import "../styles/Contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_ENDPOINT' with your actual endpoint
    fetch("YOUR_ENDPOINT", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          throw new Error("Failed to send message");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact-form-container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Sofia"
      ></link>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
