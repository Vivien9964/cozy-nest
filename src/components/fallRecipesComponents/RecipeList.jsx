import React, { useState, useEffect } from 'react'
import recipesData from "../../data/fallRecipes.json";
import RecipeCard from './RecipeCard';

const RecipeList = () => {

  // State  for recipes
  const [recipes, setRecipes] = useState([]);

  // Load recipes from separate json file
  useEffect(() => {
    setRecipes(recipesData);
  }, [])

  return (
    <main>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </main>
  )
}

export default RecipeList