import React from 'react'
import Header from './components/Header'
import Countries from './components/Countries'
import MedidasPrevencao from './components/MedidasPrevencao'
import Sintomas from './components/Sintomas'
import Footer from './components/Footer'

import './styles/global.scss'

const App = () => {
  return(
    <div>
      <Header />
      <Countries />
      <MedidasPrevencao />
      <Sintomas />
      <Footer />
    </div>
  )
}

export default App