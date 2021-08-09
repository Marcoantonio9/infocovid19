import React from 'react'

import '../styles/header.scss'

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo-container">
          {/* <img className="logo" src="/imagens/virus.png" alt="" /> */}
          <label htmlFor="" className="logo-txt">InfoCovid-19</label>
        </div>
       
        <input type="checkbox" id="check" />
        
        <div id="area-btn-menu">
          
          <label htmlFor="check" className="btn-menu">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#container">Inicio</a>
          </li>

          <li>
            <a href="#medidas-area">Medidas de Prevenção</a>
          </li>

          <li>
            <a href="#sobre">Sobre o Covid-19</a>
          </li>                    
        </ul>
      </nav>
    </div>
  )
}

export default Header
