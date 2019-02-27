import React from "react"
import { Route, NavLink } from "react-router-dom"
import "./SubNavBar.scss"

const SubNavBar = ({ nav }) => (
  <nav className="sub-nav">
    {Object.entries(nav).map(([route, attrs]) => (
      <Route
        path={`/${route}`}
        render={props =>
          attrs.map(({ imgUrl, route: subroute, name }) => (
            <NavLink to={`/${route}/${subroute}`} {...props}>
              <div className="sub-nav-item">
                <img src={imgUrl} />
                <span>{name}</span>
              </div>
            </NavLink>
          ))
        }
      />
    ))}
  </nav>
)

export default SubNavBar
