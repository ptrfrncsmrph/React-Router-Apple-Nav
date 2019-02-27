import React from "react"
import { Route, NavLink } from "react-router-dom"
import "./MainNavBar.scss"

const MainNavBar = ({ nav }) => (
  <nav className="main-nav">
    {nav.map(({ imgUrl, name, route }) => (
      <NavLink to={`/${route}`}>
        {name.length ? <span>{name[0]}</span> : <img src={imgUrl} />}
      </NavLink>
    ))}
  </nav>
)

export default MainNavBar
