import React, { useState, useContext } from "react"
import "font-awesome/css/font-awesome.min.css"
import "../styles/SearchBar.css"
import api from "../utils/apikey"
import { Context } from "../Context/Context"

const SearchBar = () => {
  // creates state for movie queries and updates the state based on the form input
  const [movieQueries, setMovieQueries] = useState("")
  const { setMoviesImdb } = useContext(Context)

  const searchMovies = async (e) => {
    e.preventDefault()

    const url = `http://www.omdbapi.com/?s=${movieQueries}&apikey=${api}`

    try {
      const res = await fetch(url)
      const data = await res.json()
      const getImdbArray = data.Search.map((movie) => movie.imdbID)
      setMoviesImdb(getImdbArray)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="search-wrapper" onClick={searchMovies}>
      <i className="fa fa-search search-icon"></i>
      <input
        type="text"
        placeholder="Search.."
        value={movieQueries}
        onChange={(e) => setMovieQueries(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
