"use client";
import { useState } from "react";
import styles from "./contact-form.module.css";
import Container from "@/components/sections/Container";

export default function Contactform() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <section>
      <Container>
    <div className="bg-[var(--theme-bg)] flex flex-col md:flex-row items-start justify-center px-2 py-20 gap-12">
     
      <div className="w-full md:w-1/2 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[var(--primary)]">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            Contact us today for seamless transportation solutions.
          </p>
        </div>
        <hr className="border-[var(--soft-grey)]" />

        <div>
          <h3 className="text-2xl font-semibold text-[var(--primary)]">Location</h3>
          <p className="text-gray-700 mt-1">
            555 Broadhollow Rd., Suite 305, Melville, 11747
          </p>
        </div>
        <hr className="border-[var(--soft-grey)]" />

        <div>
          <h3 className="text-2xl font-semibold text-[var(--primary)]">Make a Call</h3>
          <p className="text-[var(--secondary)] mt-1 font-medium">
            +1 (516) 666-4046
          </p>
        </div>
        <hr className="border-[var(--soft-grey)]" />

        <div>
          <h3 className="text-2xl font-semibold text-[var(--primary)]">Our Email</h3>
          <p className="text-[var(--secondary)] mt-1 font-medium">
            support@g1313logistics.net
          </p>
        </div>
      </div>

       <div className="w-full md:w-1/2 bg-[var(--white)] shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-2xl p-8 md:p-10">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="First Name"
              placeholder="First"
              value={formData.first}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last"
              value={formData.last}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            />
          </div>

          <input
            type="Email"
            name="Email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact No."
            value={formData.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          ></textarea>

          <button
            type="submit"
            className="bg-[var(--secondary)] text-[var(--white)] px-8 py-3 rounded-full font-medium hover:bg-[var(--primary)] transition-[var(--transition)]"
          >
            Send Enquiries
          </button>
        </form>
      </div>
     
    </div>
    </Container>
    </section>
  );
}
