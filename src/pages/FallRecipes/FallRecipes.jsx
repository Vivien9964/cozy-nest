import React from "react";
import { Link } from "react-router-dom";
import RecipeList from "../../components/fallRecipesComponents/RecipeList";
import styles from "./FallRecipes.module.css";

const FallRecipes = () => {
  return (
    <main className={styles.fallRecipesContainer}>
      <button className={styles.favoritesButton}>
        <Link to={"/favorites"} className={styles.favoritesLink}>
          See Favorites
        </Link>
      </button>

      <RecipeList />
    </main>
  );
};

export default FallRecipes;
