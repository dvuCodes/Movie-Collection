import React, { useState, useEffect } from "react"
import api from "../utils/apikey"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [moviesImdb, setMoviesImdb] = useState([])
  const [savedMovies, setSavedMovies] = useState([])

  const fetchImdbData = async () => {
    const dataPromises = moviesImdb.map(async (id) => {
      const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${api}`)
      const data = await res.json()
      return data
    })
    return Promise.all(dataPromises)
  }

  useEffect(() => {
    let subscribe = true
    const fetchData = async () => {
      if (subscribe && movies) {
        const imdbData = await fetchImdbData()
        setMovies(imdbData)
      }
    }

    fetchData()

    return () => (subscribe = false)
  }, [moviesImdb])

  const addToFavorites = (id) => {
    const newMovies = movies.find((movie) => movie.imdbID === id)
    setSavedMovies((preMovies) => [...preMovies, newMovies])
  }

  const removeFromFavorites = (id) => {
    setSavedMovies((preMovies) =>
      preMovies.filter((movie) => movie.imdbID !== id)
    )
  }

  console.log(savedMovies)

  return (
    <Context.Provider
      value={{
        movies,
        setMoviesImdb,
        addToFavorites,
        removeFromFavorites,
        savedMovies,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
