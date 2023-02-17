import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (
    <nav>
        <h1 className="appName">都道府県別グルメ情報</h1>
        <Link to="/favorites">お気に入り</Link>
    </nav>
  )
}

export default Navbar