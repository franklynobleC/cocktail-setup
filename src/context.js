import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCockTails] = useState([])

  const FetchDrinks = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()

      const { drinks } = data

      //loop through, destructure and return an Object
      if (drinks) {
        const newCocktails = drinks.map(item => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          }
        })

        setCockTails(newCocktails)
      } else {
        setCockTails([])
      }
      setIsLoading(false)

      console.log(data)
    } catch (error) {
      setIsLoading(false)
      console.log(error.message)
    }
  }

  useEffect(() => {
    FetchDrinks()
  }, [searchTerm])
  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
