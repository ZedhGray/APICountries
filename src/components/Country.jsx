const Country = ({ country }) => {
  return (
    <article className="cardInfo">
      {/** Bandera */}
      <div className="flag">
        <img src={country?.flags.svg} alt={country?.flags.alt} />
      </div>
      <div className="textInfo">
        {/** Nombre del pais */}
        <h2 className="Country_name">{country?.name.common}</h2>
        {/** Cantidad de habitantes */}
        <h2 className="Country_population">
          Population: {country?.population}
        </h2>
        {/** Capital */}
        <h2 className="Country_capital">Capital: {country?.capital[0]}</h2>
      </div>
    </article>
  )
}

export default Country
