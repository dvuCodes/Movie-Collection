import React, { useContext } from "react"
import { Link, Route, Routes } from "react-router-dom"
import useHover from "../hooks/useHover"
import "../styles/MovieCard.css"
import { Context } from "../Context/Context"

const MovieCard = ({ Title, Released, Plot, Poster, imdbID }) => {
  const [isHovered, ref] = useHover()
  const { addToFavorites, savedMovies, removeFromFavorites } =
    useContext(Context)

  const starIcon = () => {
    const alreadySaved = savedMovies.some((movie) => movie.imdbID === imdbID)
    if (alreadySaved) {
      return (
        <i
          className="ri-star-fill"
          onClick={() => removeFromFavorites(imdbID)}
        ></i>
      )
    } else if (isHovered) {
      return (
        <i className="ri-star-line" onClick={() => addToFavorites(imdbID)}></i>
      )
    }
  }

  return (
    <div className="card--wrapper" ref={ref}>
      <div className="poster--container">
        <Link to={`/${Title}`}>
          <img className="poster" src={Poster} alt={Title} />
        </Link>
        <Routes>
          <Route path={`/${Title}`}>
            {Title} - {Plot}
          </Route>
        </Routes>
      </div>
      <div className="movie--information">
        <h1 className="movie--title">{Title}</h1>
        <h3 className="movie--year">{Released}</h3>
        <div className="star--container">{starIcon()}</div>

        <p className="movie--plot"> {Plot.substring(0, 60)}...</p>
      </div>
    </div>
  )
}

export default MovieCard
