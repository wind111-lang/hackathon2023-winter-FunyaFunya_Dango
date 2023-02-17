import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (
    <nav>
        <h1 className="appName">都道府県別グルメ情報</h1>
        <div className='navRegion'>
          <Link to="/area/1">北海道</Link>
          <Link to="/area/2">東北</Link>
          <Link to="/area/3">関東</Link>
          <Link to="/area/4">中部</Link>
          <Link to="/area/5">近畿</Link>
          <Link to="/area/6">中国</Link>
          <Link to="/area/7">四国</Link>
          <Link to="/area/8">九州</Link>
          <Link to="/favorites"><div className="favorite">お気に入り</div></Link>
        </div>
    </nav>
  )
}

export default Navbar