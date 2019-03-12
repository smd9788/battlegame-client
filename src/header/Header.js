import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = ({ user }) => (
  <nav className="main-header">
    <h1 className="header-logo">Reac*rcade</h1>
    <span className="header-content"><Link to="/">Home</Link></span>
  </nav>
)

export default Header
