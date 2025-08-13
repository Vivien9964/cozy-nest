import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import recipes from "../../data/fallRecipes.json";
import { Link } from "react-router-dom";
import favBtnImg from "/assets/fallRecipesImages/favBtnImg.png";
import notFavBtnImg from "/assets/fallRecipesImages/notFavBtnImg.png";
import { RecipeContext } from "../../context/RecipeContext";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  // Show recipe details based on the recipe ID from the URL
  const { id } = useParams();

  // Get favorites array and toggle function from context
  const { favorites, toggleFavorites } = useContext(RecipeContext);

  // Find recipe based on id from URL
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) return <p className={styles.emptyState}>Recipe not found!</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <main className={styles.recipeDetailsContainer}>
      <h1 className={styles.detailsTitle}>{recipe.title}</h1>

      <div className={styles.detailsImageWrapper}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className={styles.detailsImage}
        />
      </div>

      <p className={styles.detailsPrepTime}>
        Prep time: approx. {recipe.prepTime}
      </p>

      <h3 className={styles.sectionTitle}>Ingredients:</h3>
      <ul className={styles.ingredientList}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className={styles.ingredientItem}>
            {ingredient}
          </li>
        ))}
      </ul>

      <h3 className={styles.sectionTitle}>Instructions:</h3>
      <p className={styles.instructions}>{recipe.instructions}</p>

      <div className={styles.detailsActions}>
        <Link to={"/recipes"} className={styles.backLink}>
          Back to Recipes
        </Link>

        <button
          className={styles.detailsFavoriteButton}
          onClick={() => toggleFavorites(recipe.id)}
        >
          <img
            src={isFavorite ? favBtnImg : notFavBtnImg}
            className={styles.detailsFavoriteIcon}
            alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
          />
        </button>
      </div>
    </main>
  );
};

export default RecipeDetails;
