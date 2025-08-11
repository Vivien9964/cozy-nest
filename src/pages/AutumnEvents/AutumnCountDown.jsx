import React, { useEffect, useState } from 'react'
import AddEventForm from '../../components/AutumnCountDownComponents/AddEventForm';
import EventList from '../../components/AutumnCountDownComponents/EventList';

const AutumnCountDown = () => {

  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem('events')
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events]);


  const addEvent = (eventName, eventDate) => {
    const daysRemaining = calculateRemaining(eventDate);
    const newEvent = {
      id: crypto.randomUUID(),
      name: eventName,
      date: eventDate,
      daysRemaining
    };

    setEvents((prev) => [...prev, newEvent]);
  }

  const removeEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  }


  const calculateRemaining = (date) => {
    const today = new Date();
    const targetDate = new Date(date);
    const difference = targetDate - today;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }

  return (
    <div>

      <h1>Autumn Events</h1>

      <AddEventForm onAddEvent={addEvent} />
      <EventList events={events} onRemoveEvent={removeEvent} />

    </div>
  )
}

export default AutumnCountDown