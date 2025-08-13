import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import favBtnImg from "/assets/fallRecipesImages/favBtnImg.png";
import notFavBtnImg from "/assets/fallRecipesImages/notFavBtnImg.png";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  // Use favorites array and toggle function from context
  const { favorites, toggleFavorites } = useContext(RecipeContext);
  // Check if the favorites array contains the recipe or not
  // Based on this the picture in the toggle button changes
  const isFavorite = favorites.includes(recipe.id);

  return (
    <main className={styles.recipeCard}>
      <h2 className={styles.recipeTitle}>{recipe.title}</h2>

      <div className={styles.imageWrapper}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className={styles.recipeImage}
        />
      </div>

      <p className={styles.prepTime}>Prep time: {recipe.prepTime}</p>

      <div className={styles.cardActions}>
        <Link to={`/recipes/${recipe.id}`} className={styles.viewRecipeLink}>
          View Recipe
        </Link>
      </div>

      <button
        className={styles.favoriteButton}
        onClick={() => toggleFavorites(recipe.id)}
      >
        <img
          src={isFavorite ? favBtnImg : notFavBtnImg}
          className={styles.favoriteIcon}
          alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
        />
      </button>
    </main>
  );
};

export default RecipeCard;
