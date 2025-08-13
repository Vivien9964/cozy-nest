import React, { useState } from "react";
import autumnImages from "../../data/autumnImages";
import ImageGrid from "../../components/moodBoardComponents/ImageGrid";
import styles from "./MoodBoard.module.css";

import ImageModal from "../../components/moodBoardComponents/ImageModal";

const MoodBoard = () => {
  
  const [mood, setMood] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMoodSelect = (e) => {
    const selectedMood = e.target.value;
    setMood(selectedMood);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const moodImages = autumnImages.filter((image) => image.moods.includes(mood));

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Autumn Mood Board</h1>
        <p className={styles.subtitle}>
          Choose your autumn vibe and discover images that match your mood! Each
          mood unlocks a collection of photos that capture that cozy seasonal
          feeling.
        </p>
      </header>

      <nav className={styles.filterSection}>
        <label htmlFor="mood-select" className={styles.filterLabel}>
          Choose your mood:
        </label>
        <select
          id="mood-select"
          className={styles.moodSelect}
          value={mood}
          onChange={handleMoodSelect}
        >
          <option value="all">All</option>
          <option value="cozy">Cozy</option>
          <option value="warm">Warm</option>
          <option value="halloween">Halloween</option>
          <option value="outdoor">Outdoor</option>
        </select>
      </nav>

      <section className={styles.imageSection}>
        {mood === "" || mood === "all" ? (
          <ImageGrid images={autumnImages} onImageClick={openModal} />
        ) : (
          <ImageGrid images={moodImages} onImageClick={openModal} />
        )}
      </section>

      {isModalOpen && selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </main>
  );
};

export default MoodBoard;
