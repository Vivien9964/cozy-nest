import React from "react";
import CountDownCard from "./CountDownCard";
import styles from "./EventList.module.css";

const EventList = ({ events, onRemoveEvent }) => {
  return (
    <div className={styles.eventListContainer}>
      {events.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No events yet, add one now!</p>
        </div>
      ) : (
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <CountDownCard
              key={event.id}
              event={event}
              onRemove={() => onRemoveEvent(event.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
