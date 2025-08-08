import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <main>
      <h2>{recipe.title}</h2>

      <div>
        <img src={recipe.image} alt={recipe.title} />
      </div>

      <p>Prep time: {recipe.prepTime}</p>

      <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>

    </main>
  );
};

export default RecipeCard;
