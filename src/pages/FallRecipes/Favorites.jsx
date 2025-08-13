import React, { useContext } from "react";
import { Link } from "react-router-dom";
import recipes from "../../data/fallRecipes.json";
import { RecipeContext } from "../../context/RecipeContext";
import styles from "./Favorites.module.css";

const Favorites = () => {
  // Get favorites array from context
  const { favorites } = useContext(RecipeContext);

  // Filter recipes based on favorite recipe id's
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <main className={styles.favoritesContainer}>
      <h2 className={styles.favoritesTitle}>Your Favorite Recipes</h2>

      <button className={styles.backButton}>
        <Link to={"/recipes"} className={styles.backButtonLink}>
          Back to Recipes
        </Link>
      </button>

      <ul className={styles.favoritesList}>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id} className={styles.favoriteItem}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className={styles.favoriteItemImage}
            />

            <div className={styles.favoriteItemContent}>
              <h3 className={styles.favoriteItemTitle}>{recipe.title}</h3>
              <Link
                to={`/recipes/${recipe.id}`}
                className={styles.favoriteItemLink}
              >
                View Recipe
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Favorites;
