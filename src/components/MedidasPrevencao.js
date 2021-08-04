import React from 'react'

import '../styles/medidas.scss'

const MedidasPrevencao = () => {
  return (
    <div id="medidas-area">
      <h2>Medidas de Prevenção contra o Covid-19</h2>
      <div id="container-medidas">
        <div className="medidas-txt">
          <p>
            <strong>1.</strong> Lave bem as mãos e com frequência, usando álcool em gel ou água e sabão.
            Por quê? Lavar as mãos com água e sabão ou usar álcool em gel mata os vírus que podem estar nas suas mãos.            
            <br />
            <br />
            <strong>2.</strong> Mantenha uma distância mínima de 1 metro entre você e qualquer pessoa que tosse ou espirra.
            Por quê? Quando alguém tosse ou espirra, gotas de fluido que podem conter o vírus são liberadas pelo nariz ou pela boca. Se você estiver muito perto, pode respirar as gotículas e, com elas, o vírus COVID-19.            
            <br />
            <br />
            <strong>3.</strong> Evite tocar nos olhos, nariz e boca.
            Por quê? As mãos tocam muitas superfícies e podem “pegar” vírus. Uma vez contaminadas, as mãos podem transferir o vírus para os olhos, nariz ou boca. A partir daí o vírus pode entrar no seu corpo e causar doenças.                    
          </p>
        </div>

        <div className="medidas-img">
          <img src="/imagens/img1.png" alt="" />
        </div>

        <div className="medidas-img">
          <img src="/imagens/img2.png" alt="" />
        </div>   

        <div className="medidas-txt">
        <p>
          <strong>4.</strong> Você e as pessoas ao seu redor devem manter uma boa higiene das vias aéreas. Isso significa cobrir a boca e o nariz com o cotovelo dobrado ou com um lenço de papel quando tossir ou espirrar. O lenço usado deve ser descartado imediatamente.
          Por quê? Os vírus se espalham através de gotículas. Ao manter uma boa higiene respiratória, você protege as pessoas ao seu redor contra vírus como resfriado, gripe e COVID-19.
          <br />
          <br />
          <strong>5.</strong> Fique em casa se não estiver bem. Se você tiver febre, tosse e falta de ar, procure atendimento médico e ligue com antecedência para o posto de saúde, UPA ou pronto-socorro.
          Por quê? Ligar com antecedência permitirá que o seu atendimento seja direcionado rapidamente ao centro de saúde certo. Isso também irá protegê-lo e ajudar a impedir a propagação de vírus e outras infecções.            
          <br />
          <br />
          <strong>6.</strong> Mantenha-se informado sobre as últimas notícias sobre a COVID-19 em canais oficiais e siga as orientações sobre como se proteger e a outras pessoas da COVID-19.
          Por quê? Os canais oficiais terão as informações mais atualizadas sobre se a COVID-19 está se espalhando em sua área e sobre os cuidados corretos para se proteger.
          <br />
          <br />
          Referência: <a href="https://www.coronavirus.sc.gov.br/prevencao/" target="_blank">Coronavírus SC. </a>   
          </p>     
        </div>             
      </div>
    </div>
  )
}

export default MedidasPrevencao
