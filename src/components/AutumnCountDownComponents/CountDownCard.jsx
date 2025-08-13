import React from "react";
import styles from "./CountDownCard.module.css";

const CountDownCard = ({ event, onRemove }) => {
  // Get data from event object
  const { name, date, daysRemaining } = event;

  return (
    <div className={styles.countdownCard}>
      <div className={styles.cardContent}>
        <h2 className={styles.eventName}>{name}</h2>
        <p className={styles.eventDate}>{date}</p>
        <p className={styles.daysRemaining}>
          {daysRemaining === 0
            ? `${name} is today!`
            : daysRemaining < 0
            ? `${Math.abs(daysRemaining)} day${Math.abs(daysRemaining) !== 1 ? "s" : ""} ago.`
            : `${daysRemaining} day${daysRemaining !== 1 ? "s" : ""} left!`}
        </p>

        <button className={styles.deleteButton} onClick={onRemove}>
          Delete Event
        </button>
      </div>
    </div>
  );
};

export default CountDownCard;
