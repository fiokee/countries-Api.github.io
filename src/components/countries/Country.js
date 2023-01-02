import {useState, useEffect} from 'react'
import './Country.style.css';
import CountryImg from '../../assets/germany.png';


export function Country(){
  const [countries, setCountries] = useState([])
  const [error, setError] = useState()
  const fetchCountry = async () => {
    try{

      const response = await fetch(`https://restcountries.com/v3.1/all`)
      if(!response.ok){
        throw new Error(`Failed to fetch countries: ${response.statusText}`)
      }
      const data = await response.json()
      setCountries(data)
      console.log(data)
    } catch (error){
      setError(error.message)
    }
  } 

  useEffect(() => {
    fetchCountry()
  }, [])
 
  return (
    <div className='container'>
      {
      countries?.map(country=>(
        <div className='card'>
        <img src={country.flags.png} alt='cont'></img>
        <h1>{country.name.common}</h1>
        <p>Population: <span>{country.population}</span></p>
        <p>Region: <span>{country.region}</span></p>
        <p>Capital: <spn>{country.capital}</spn></p>
    </div>
      ))
      }
    {/* <button onClick=""></button> */}
    </div>
  )
}
