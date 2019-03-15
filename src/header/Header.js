import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = ({ user }) => (
  <nav className="main-header">
    <div className="header-content">
      <h1 className="header-logo">Reac*<span className="rcade-text">rcade</span></h1>
      <span><Link to="/">Main Menu</Link></span>
    </div>
  </nav>
)

export default Header
