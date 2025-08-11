import React from 'react'
import { Link } from 'react-router-dom'
import RecipeList from '../../components/fallRecipesComponents/RecipeList'

const FallRecipes = () => {
  return (
    
    <div>

    <RecipeList />

      <button><Link to={'/favorites'}>See Favorites</Link></button>

    </div>
  )
}

export default FallRecipes