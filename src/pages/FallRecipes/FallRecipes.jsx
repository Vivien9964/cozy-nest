import React from 'react'
import { Link } from 'react-router-dom'
import RecipeList from '../../components/fallRecipesComponents/RecipeList'

const FallRecipes = () => {
  return (
    
    <div>

      <button><Link to={'/favorites'}>See Favorites</Link></button>

      <RecipeList />


    </div>
  )
}

export default FallRecipes