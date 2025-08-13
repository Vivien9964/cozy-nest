import React, { useEffect, useState } from "react";
import AddEventForm from "../../components/AutumnCountDownComponents/AddEventForm";
import EventList from "../../components/AutumnCountDownComponents/EventList";
import styles from "./AutumnCountDown.module.css";

const AutumnCountDown = () => {
  // Lazy loading events
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : [];
  });

  // Save events to local storage whenever events changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Function to add a new event
  const addEvent = (eventName, eventDate) => {
    const daysRemaining = calculateRemaining(eventDate);
    const newEvent = {
      id: crypto.randomUUID(), // secure random id
      name: eventName,
      date: eventDate,
      daysRemaining,
    };

    setEvents((prev) => [...prev, newEvent]);
  };

  // Function to delete an event based on it's id
  const removeEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  // Function to calculate the remaining time until target date
  const calculateRemaining = (date) => {
    const today = new Date();
    const targetDate = new Date(date);
    const difference = targetDate - today;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className={styles.countdownContainer}>
      <h1 className={styles.mainTitle}>Autumn Events</h1>

      <AddEventForm onAddEvent={addEvent} />
      <EventList events={events} onRemoveEvent={removeEvent} />
    </div>
  );
};

export default AutumnCountDown;
