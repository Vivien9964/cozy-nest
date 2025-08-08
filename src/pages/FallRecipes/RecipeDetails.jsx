import React from 'react'
import { useParams } from 'react-router-dom';
import recipes from "../../data/fallRecipes.json";


const RecipeDetails = () => {

  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);


  return (
    <main>

    <h1>{recipe.title}</h1>

    <div>
      <img src={recipe.image} alt={recipe.title} />
    </div>

    <p>Prep time: approx. {recipe.prepTime}</p>

    <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))}
      </ul>

    <h3>Instructions:</h3>
    <p>{recipe.instructions}</p>
  </main>
  )
}

export default RecipeDetails