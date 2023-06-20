import React from "react"
import SearchBar from "./SearchBar"
import "../styles/Header.css"

const Header = () => {
  return (
    <header>
      <div className="header--top">
        <h1 className="app--title">Movie Collection</h1>
        <h4 className="watchlist--btn">hamburger</h4>
      </div>

      <div className="search--container">
        <SearchBar />
      </div>
    </header>
  )
}

export default Header
