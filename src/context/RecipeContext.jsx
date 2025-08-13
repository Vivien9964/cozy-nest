import React, { createContext, useEffect, useState } from 'react'

export const RecipeContext = createContext(); 

const RecipeProvider = ({ children }) => {

  // State for favorite recipes
  // Check if there are favorite recipes in localStorage, if so, then return favorite recipes, else an empty array
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  })

  // Function to add / remove recipe from favorites
  const toggleFavorites = (id) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );

  }

  // Save favorites into localStorage whenever favorites array changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites]);

  
  const contextValue = {
    favorites,
    toggleFavorites
  }

  return (

    <RecipeContext.Provider value={contextValue}>
      { children }
    </RecipeContext.Provider>
  )
}

export default RecipeProvider