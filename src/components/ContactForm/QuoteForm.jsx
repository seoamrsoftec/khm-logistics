"use client";
import styles from "./QuoteForm.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/quote", data); // 👈 API endpoint
      console.log("✅ Success:", res.data);
      alert("Quote request sent successfully!");
      reset(); // clear form
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="grid gap-5">
        <li>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </li>

        <li>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </li>

        <li>
          <input
            type="text"
            placeholder="Phone Number"
            className={styles.input}
            {...register("phone", {
              required: "Phone is required",
              minLength: { value: 8, message: "Phone must be at least 8 digits" },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </li>

        <li>
          <input
            type="text"
            placeholder="Suburb"
            className={styles.input}
            {...register("suburb", { required: "Suburb is required" })}
          />
          {errors.suburb && (
            <p className="text-red-500 text-sm">{errors.suburb.message}</p>
          )}
        </li>

        <li>
          <textarea
            placeholder="Description"
            className={styles.input}
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </li>

        <li className="text-center">
          <button
            type="submit"
            className="btn secondary"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Sending..." : "Get A Quote Now!"}</span>
          </button>
        </li>
      </ul>
    </form>
  );
}
