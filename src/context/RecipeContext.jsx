import React, { createContext, useState } from 'react'

export const RecipeContext = createContext(); 

const RecipeProvider = () => {


  const [favorites, setFavorites] = useState([]);





  const contextValue = {
    favorites,
  }

  return (

    <RecipeContext.Provider value={contextValue}>
      { children }
    </RecipeContext.Provider>
  )
}

export default RecipeProvider