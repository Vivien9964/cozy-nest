import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ imageID, imageUrl, altText, mood, onClick }) => {
  return (
    <article className={styles.imageCard} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={altText} />
      </div>

      <div className={styles.imageOverlay}></div>

      <footer className={styles.cardFooter}>
        <p className={styles.description}>{altText}</p>
        <ul className={styles.moodList}>
          {/* Note: Always add a unique key to each item!!! */}
          {mood.map((moods, index) => {
            return (
              <li key={`${imageID}-${index}`}>
                <span
                  className={styles.moodTag}
                  data-mood={moods.toLowerCase()}
                >
                  {moods}
                </span>
              </li>
            );
          })}
        </ul>
      </footer>
    </article>
  );
};

export default ImageCard;
