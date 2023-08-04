import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

//pass  searchForm and CocktailList components to the Home Component
const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
