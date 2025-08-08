import React, { useState, useEffect } from 'react'
import recipesData from "../../data/fallRecipes.json";
import RecipeCard from './RecipeCard';

const RecipeList = () => {

  const [recipes, setRecipes] = useState([]);

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