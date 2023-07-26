import { useRef } from 'react'

const Filters = ({ setInputCountryName, stateCountryName }) => {
  const inputCountryName = useRef()

  const handleCountryName = () => {
    setInputCountryName(inputCountryName.current.value)
  }
  return (
    <div>
      <h1>Filters</h1>
      <form action="">
        <h2>Filter By Name</h2>
        <input
          type="text"
          placeholder="Enter country name"
          value={stateCountryName}
          ref={inputCountryName}
          onChange={handleCountryName}
        />
      </form>
      <form action="">
        
      </form>
    </div>
  )
}

export default Filters
