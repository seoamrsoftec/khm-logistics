"use client";
import { useState } from "react";
import styles from "./contact-form.module.css";

export default function Contactform() {
  // ✅ Define form state
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    contact: "",
    message: "",
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-start justify-center px-6 md:px-20 py-12 gap-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            Contact us today for seamless transportation solutions.
          </p>
        </div>
        <hr />
        <div>
          <h3 className="text-2xl font-semibold">Location</h3>
          <p className="text-gray-700 mt-1">
            555 Broadhollow Rd., Suite 305, Melville, 11747
          </p>
        </div>
        <hr />
        <div>
          <h3 className="text-2xl font-semibold">Make a Call</h3>
          <p className="text[--secondary] mt-1 font-medium">+1 (516) 666-4046</p>
        </div>
        <hr />
        <div>
          <h3 className="text-2xl font-semibold">Our Email</h3>
          <p className="text[--secondary] mt-1 font-medium">
            support@g1313logistics.net
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first"
              placeholder="First"
              value={formData.first}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0e7e99]"
            />
            <input
              type="text"
              name="last"
              placeholder="Last"
              value={formData.last}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0e7e99]"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0e7e99]"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact No."
            value={formData.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0e7e99]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0e7e99]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#0e7e99] text-white px-8 py-3 rounded-full font-medium hover:bg-[#075a6b] transition-all duration-200"
          >
            Send Enquiries
          </button>
        </form>
      </div>
    </div>
  );
}
