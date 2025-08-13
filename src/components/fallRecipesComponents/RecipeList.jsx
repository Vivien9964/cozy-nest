import React, { useState, useEffect } from 'react'
import recipesData from "../../data/fallRecipes.json";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.module.css";

const RecipeList = () => {

  // State  for recipes, empty array
  const [recipes, setRecipes] = useState([]);

  // Load recipes from separate json file once
  useEffect(() => {
    setRecipes(recipesData);
  }, [])

  return (
    <main className={styles.recipeListContainer}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </main>
  )
}

export default RecipeList