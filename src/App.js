import React from 'react'
import Header from './components/Header'
import Countries from './components/Countries'
import MedidasPrevencao from './components/MedidasPrevencao'
import Sobre from './components/Sobre'

import './styles/global.scss'

const App = () => {
  return(
    <div>
      <Header />
      <Countries />
      <MedidasPrevencao />
      <Sobre />
    </div>
  )
}

export default App