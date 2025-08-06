import React from "react";
import ImageCard from "./ImageCard";
import styles from "./ImageGrid.module.css";

// Note: Always make sure when you use map to add a unique key to each item!!

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGrid}>
      {images.map((image) => {
        return (
          <li key={image.id} className={styles.imageItem}>
            <ImageCard
              key={image.id}
              imageID={image.id}
              imageUrl={image.url}
              altText={image.alt}
              mood={image.moods}
              onClick={() => onImageClick(image)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGrid;
