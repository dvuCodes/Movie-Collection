import React, { useContext } from "react"
import Header from "./components/Header"
import MovieCard from "./components/MovieCard"
import { Context } from "./Context/Context"
import "./styles/App.css"

function App() {
  const { movies } = useContext(Context)

  const renderMovies = movies.map((movie) => {
    return <MovieCard key={movie.imdbID} {...movie} />
  })

  return (
    <div className="main">
      <Header />
      <main>{renderMovies}</main>
    </div>
  )
}

export default App
