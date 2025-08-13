import React, { useEffect, useState } from "react";
import styles from "./AddEventForm.module.css";

const AddEventForm = ({ onAddEvent }) => {
  // Form states
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [error, setError] = useState("");

  // Clear error message after two seconds if error is present
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  // Function to handle submit
  // Set error message if name or event is not present
  // Reset states and call add event helper function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate) {
      setError("Please, fill out all fields!");
      return;
    }

    setError("");
    onAddEvent(eventName, eventDate);
    setEventName("");
    setEventDate("");
  };

  return (
    <main className={styles.addEventContainer}>
      <form className={styles.eventForm} onSubmit={handleSubmit}>
        {error && <p>{error}</p>}

        <input
          className={styles.eventInput}
          type="text"
          placeholder="Enter an event..."
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <input
          className={styles.dateInput}
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />

        <button className={styles.addButton} type="submit">
          Add Event
        </button>
      </form>
    </main>
  );
};

export default AddEventForm;
