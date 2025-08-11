import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { RecipeContext } from '../../context/RecipeContext';
import favBtnImg from "/assets/fallRecipesImages/favBtnImg.png";
import notFavBtnImg from "/assets/fallRecipesImages/notFavBtnImg.png";

const RecipeCard = ({ recipe }) => {

  // Use favorites array and toggle function from context
  const { favorites, toggleFavorites } = useContext(RecipeContext);
  // Check if the favorites array contains the recipe or not
  // Based on this the picture in the toggle button changes
  const isFavorite = favorites.includes(recipe.id);

  return (
    <main>
      <h2>{recipe.title}</h2>

      <div>
        <img src={recipe.image} alt={recipe.title} height="300" width="400"/>
      </div>

      <p>Prep time: {recipe.prepTime}</p>

      <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
      <button onClick={() => toggleFavorites(recipe.id)}>
        {isFavorite ? (
          <img src={favBtnImg} height="20" width="20" />
        ) : (
          <img src={notFavBtnImg} height="20" width="20" />
        )}
      </button>
    </main>
  );
};

export default RecipeCard;
