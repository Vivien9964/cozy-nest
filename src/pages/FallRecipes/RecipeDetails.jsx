import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import recipes from "../../data/fallRecipes.json";
import { Link } from "react-router-dom";
import favBtnImg from "/assets/fallRecipesImages/favBtnImg.png";
import notFavBtnImg from "/assets/fallRecipesImages/notFavBtnImg.png";
import { RecipeContext } from "../../context/RecipeContext";

const RecipeDetails = () => {
  // Show recipe details based on the recipe ID from the URL
  const { id } = useParams();
  const { favorites, toggleFavorites } = useContext(RecipeContext);
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) return <p>Recipe not found!</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <main>
      <h1>{recipe.title}</h1>

      <div>
        <img src={recipe.image} alt={recipe.title} height="400" width="400"/>
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

      <div>
        <Link to={"/recipes"}>Back to Recipes</Link>
        <button onClick={() => toggleFavorites(recipe.id)}>
          {isFavorite ? (
            <img src={favBtnImg} height="30" width="30" />
          ) : (
            <img src={notFavBtnImg} height="30" width="30" />
          )}
        </button>
      </div>
    </main>
  );
};

export default RecipeDetails;
