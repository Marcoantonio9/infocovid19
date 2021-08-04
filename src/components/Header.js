import React from 'react'

import '../styles/header.scss'

const Header = () => {
  return (
    <div>
      <nav>
        <div id="area-logo">
          <span>InfoCovid-19 <i class="fas fa-virus-slash"></i></span>
        </div>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Medidas de prevenção</a>
          </li>

          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
