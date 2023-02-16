import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigation = useNavigate();
  
  return (
    <div>
        <button className="region" type="button" onClick={() => navigation('/area/1')}>北海道</button>
        <button className="region" type="button" onClick={() => navigation('/area/2')}>東北</button>
        <button className="region" type="button" onClick={() => navigation('/area/3')}>関東</button>
        <button className="region" type="button" onClick={() => navigation('/area/4')}>中部</button>
        <button className="region" type="button" onClick={() => navigation('/area/5')}>近畿</button>
        <button className="region" type="button"onClick={() => navigation('/area/6')}>中国</button>
        <button className="region" type="button"onClick={() => navigation('/area/7')}>四国</button>
        <button className="region" type="button"onClick={() => navigation('/area/8')}>九州</button>
    </div>
  )
}

export default Home