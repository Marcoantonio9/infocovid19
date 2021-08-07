import React from 'react'

import '../styles/sintomas.scss'

const Sobre = () => {
  return (
    <div id="sobre">
      <h2>Sobre o Covid-19</h2>
      <h3 className="linha-curta-h3">Sintomas mais comuns:</h3>
      <div id="area-cards-sintomas">
        <div className="card-sintomas">
          <div className="card-img-sintomas">
            <img src="/imagens/img-febre.png" alt="" />
          </div>
          <span className="sintoma">Febre</span>
        </div>

        <div className="card-sintomas">
          <div className="card-img-sintomas">
            <img src="/imagens/img-tosse.png" alt="" />
          </div>    

          <span className="sintoma">Tosse seca</span>      
        </div>     

        <div className="card-sintomas">
          <div className="card-img-sintomas">
            <img src="/imagens/img-cansaco.png" alt="" />
          </div>    

          <span className="sintoma">Cansaço excessivo</span>      
        </div>      

        <div className="card-sintomas">
          <div className="card-img-sintomas">
            <img src="/imagens/img-coriza.png" alt="" />
          </div>    

          <span className="sintoma">Coriza ou nariz entupido</span>      
        </div>     

        <div id="casos-suspeita">
          <h3 className="linha-media-h3">O que fazer em casos de suspeita?</h3>  
          <div>
            <ul>
              <li><strong>Utilizar máscara descartável</strong>, para proteger as outras pessoas da tosse e de espirro que podem espalhar o vírus;</li>
              <li><strong>Cobrir o nariz e a boca para espirrar ou tossir</strong>, utilizando um lenço descartável e descartando após cada utilização;</li>
              <li><strong>Evitar o contato direto com outras pessoas</strong>, através do toque, beijos ou abraços;</li>
              <li><strong>Evitar utilizar o transporte público</strong> para chegar ao hospital e/ou serviço de saúde.</li>
            </ul>   
          </div>            
        </div>    
      </div>
    </div>
  )
}

export default Sobre
