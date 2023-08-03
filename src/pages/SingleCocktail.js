import React, { useRef } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { setSearchTerm } = useGlobalContext()

  const searchCocktail = () => {}

  return <div></div>
}

export default SingleCocktail
