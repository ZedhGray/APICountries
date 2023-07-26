import { useState, useEffect, useRef } from 'react'
import './App.css'
import axios from 'axios'
import Country from './components/Country'
import Filters from './components/Filters'

function App() {
  /** https://restcountries.com/v3.1/lang/spanish
  //Hacer una peticion asincrona a la url de arriba 
  */
  /**
  * Se desea desplegar en un componente nuevo solo el primer pais
  * Desplegar la siguiente informacion
  * Bandera
  * nombre del pais
  * cantidad de habitantes
  * capital
  * 
  *     
    <CountryInfo country={country?.[0]}/>
  */
  //Estado que guarada los paises
  const [countries, setCountries] = useState()
  //Estado que guarda el idioma de los paises que se mostraran
  const [inputValue, setInputValue] = useState('spanish')
  //Estado que guarda si hubo un error en la peticion
  const [hasError, setHasError] = useState(false)
  //Estado que guarda el nombre del pais que se desea buscar
  const [inputCountryName, setInputCountryName] = useState(``)

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/lang/${inputValue}`

    axios
      .get(url)
      .then((res) => {
        setCountries(res.data)
        setHasError(false)
      })
      .catch((err) => {
        console.log(err)
        setHasError(true)
      })
  }, [inputValue])

  const inputLang = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(inputLang.current.value.trim())
  }

  const filterCountries = countries?.filter((country) => {
    const name = country.name.common.toLowerCase()
    const countryName = inputCountryName.toLowerCase()
    return name.includes(countryName)
  })

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Inserte your language"
          ref={inputLang}
          type="text"
        />
        <button>Search</button>
      </form>

      <Filters
        setInputCountryName={setInputCountryName}
        stateCountryName={inputCountryName}
      />

      {hasError ? (
        <h1>{`${inputValue} is not languange valid.`} 😥</h1>
      ) : filterCountries?.length ? (
        filterCountries?.map((country, index) => (
          <Country key={country.name.official} country={country} />
        ))
      ) : (
        <h2>404 Not Found ✖</h2>
      )}
    </div>
  )
}

export default App
