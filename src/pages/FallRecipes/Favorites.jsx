import React, { useContext } from "react";
import { Link } from "react-router-dom";
import recipes from "../../data/fallRecipes.json";
import { RecipeContext } from "../../context/RecipeContext";

const Favorites = () => {

  const { favorites } = useContext(RecipeContext);

  // Filter recipes based on favorite recipe id's
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );


  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} height="40" width="40" />
            <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
          </li>
        ))}
      </ul>

      <button>
        <Link to={"/recipes"}>Back to Recipes</Link>
      </button>
    </div>
  );
};

export default Favorites;
