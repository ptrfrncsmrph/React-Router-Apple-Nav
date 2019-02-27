import React, { Component } from "react"
import { Route } from "react-router-dom"

import subNav from "./data/sub-nav.json"
import nav from "./data/nav.json"
import MainNavBar from "./components/MainNavBar"
import SubNavBar from "./components/SubNavBar"

import "./App.css"

class App extends Component {
  state = {
    mainNav: nav,
    subNav
  }

  componentDidMount() {}

  render() {
    const {
      mainNav: { nav },
      subNav
    } = this.state
    return (
      <>
        <div class="container">
          <MainNavBar nav={nav} />
        </div>
        <div class="container white">
          <SubNavBar nav={subNav} />
        </div>
      </>
    )
  }
}

export default App
