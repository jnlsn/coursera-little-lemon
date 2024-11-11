import React, { useState } from "react";
import styles from "./booking-form.module.css";
import { submitAPI } from "../lib/api";
import { useNavigate } from "react-router-dom";

interface BookingFormProps {
  availableTimes: string[];
  onDateChange: React.Dispatch<string>;
  onSuccess: () => void;
}

export const BookingForm = ({
  availableTimes: times,
  onDateChange,
  onSuccess,
}: BookingFormProps) => {
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState({
    date: new Date().toString(),
    time: times[0],
    guests: "",
    occasion: "birthday",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.currentTarget;
    setFormValues({ ...formValues, [name]: value });
    if (name === "date") {
      onDateChange(value);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const empty = Object.entries(formValues)
          .filter(([, val]) => !val)
          .map(([key]) => key);
        if (empty.length > 0) {
          setMessage(
            "Please fill out the following fields: " + empty.join(", ")
          );
          return;
        }
        const success = submitAPI(formValues);
        if (success) {
          onSuccess();
        } else {
          setMessage("Something went wrong.");
        }
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        onChange={handleChange}
        value={formValues.date}
        type="date"
        id="res-date"
        name="date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        onChange={handleChange}
        defaultValue={formValues.time}
      >
        {times.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formValues.guests}
        onChange={handleChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        name="occasion"
        onChange={handleChange}
        value={formValues.occasion}
        id="occasion"
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      {Boolean(message) && (
        <p role="alert" aria-live="assertive">
          {message}
        </p>
      )}
      <button type="submit">Make Reservation</button>
    </form>
  );
};
