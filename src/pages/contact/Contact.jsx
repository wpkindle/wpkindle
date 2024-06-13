import React, { useState, useContext } from "react";
import myContext from "../../context/data/myContext";
import EmailJS from "@emailjs/browser";
import Layout from "../../components/layout/Layout";

function Contact() {
  const context = useContext(myContext);
  const { mode } = context;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    EmailJS.send(
      import.meta.env.VITE_REACT_APP_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_REACT_APP_PUBLIC_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!"); // User-friendly feedback
        setFormData({ name: "", email: "", message: "" }); // Clear form after success
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  };

  return (
    <Layout>
      <section
        className="container px-5 md:py-5 mx-auto text-gray-600 body-font"
        style={{ color: mode === "dark" ? "white" : "" }}
      >
        <h1 className="text-3xl font-medium title-font mb-5">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label inline-block mb-2 text-lg"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-3 py-2 text-base leading-tight"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label inline-block mb-2 text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-3 py-2 text-base leading-tight"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="form-label inline-block mb-2 text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-3 py-2 text-base leading-tight"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default Contact;
