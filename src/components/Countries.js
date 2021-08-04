import React from 'react'
import '../styles/countries.scss'

const Countries = () => {
  const [pais, setPais] = React.useState([])
  const [valorPaisSelecionado, setValorPaisSelecionado] = React.useState('')
  const [nomePaisSelecionado, setNomePaisSelecionado] = React.useState('')
  const [numeroVacinados, setNumeroVacinados] = React.useState('')
  const [totalVacinados, setTotalVacinados] = React.useState('')

  React.useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries/`, {
        method: 'get'
      })
      const json = await response.json()
      
      setPais(json)
      setNomePaisSelecionado(json[26].country)
      setValorPaisSelecionado(26)
      
    
    }
    dataFetch()
  }, [])

  function handleChange(event){
    let getValor = event.target.value
    let getNome = event.target[event.target.selectedIndex].text

    setValorPaisSelecionado(getValor)
    setNomePaisSelecionado(getNome)
  }

  React.useEffect(() => {
    const changeFetch = async () => {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries/${nomePaisSelecionado}`, {
        method: 'get'
      })
      const json = await response.json()
      setNomePaisSelecionado(json)

      const responseVacinas = await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${nomePaisSelecionado}?lastdays=1`, {
        method: 'get'
      })      

      const jsonVacina = await responseVacinas.json()
      setNumeroVacinados(jsonVacina)
        
      if(jsonVacina.timeline != null){
        let keyObj = Object.keys(jsonVacina.timeline)[0]
        let totalObj = jsonVacina.timeline[`${keyObj}`]

        setTotalVacinados(totalObj)
        console.log(keyObj) 
      }

           
    }
    changeFetch()
  }, [valorPaisSelecionado])

  return (
    <div id="container">
      <h2>Informações sobre o Covid-19 ao redor do mundo.</h2>
      <small>Dados atualizados diariamente.</small>
      <select value={valorPaisSelecionado} id="pais_selecionado" onChange={handleChange}>
        {pais && pais.map((paises, y) => (
          <option value={y} key={y}>{paises.country}</option>
        ))}
      </select>

      <div id="area-cards">
        <div className="cards-infos pulse">
          <span>Casos confirmados:</span>
          <strong>{nomePaisSelecionado && Number(nomePaisSelecionado.cases).toLocaleString('pt-BR')}</strong>
        </div>  

        <div className="cards-infos">
          <span>Casos atuais:</span>
          <strong>{nomePaisSelecionado && Number(nomePaisSelecionado.active).toLocaleString('pt-BR') }</strong>
        </div>   

        <div className="cards-infos">
          <span>Recuperados:</span>
          <strong>{nomePaisSelecionado && Number(nomePaisSelecionado.recovered).toLocaleString('pt-BR') }</strong>
        </div>   

        <div className="cards-infos">
          <span>Mortes:</span>
          <strong>{nomePaisSelecionado && Number(nomePaisSelecionado.deaths).toLocaleString('pt-BR') }</strong>
        </div>   

        <div className="cards-infos">
          <span>Número de vacinados: </span>
          <strong>{totalVacinados && Number(totalVacinados).toLocaleString('pt-BR')}</strong>
        </div>                                        
      </div>
      
    </div>
  )
}

export default Countries
