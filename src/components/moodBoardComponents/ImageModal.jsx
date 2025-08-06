import React from "react";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {

  console.log("Recieved Image", image);

  if (!image) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        
          <button className={styles.closeBtn} onClick={onClose}>
            {" "}
            &times;{" "}
          </button>

          <img className={styles.modalImage} src={image.url} alt={image.alt} />
          <figcaption>
            <p>{image.alt}</p>
          </figcaption>
      </div>
    </div>
  );
};

export default ImageModal;
