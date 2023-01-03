import {useState, useEffect, Fragment} from 'react'
import './Country.style.css';
import CountryImg from '../../assets/germany.png';
import SearchBar from '../search/SearchBar';


export function Country(){
  const [countries, setCountries] = useState([])
  const [error, setError] = useState()

//making a call to the api to get some data and renders it
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
  //search for country by name 
  const fetchCountryByName = async (countryName)=>{
    try{
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    if(!response.ok){
      throw new Error(`Failed to fetch countries: ${response.statusText}`)
    }
    const data = await response.json()
      setCountries(data)
    }catch(error){
      setError(error.message)
    }
  }
//end of search

  useEffect(() => {
    fetchCountry()
  }, [])
 
  return (
    <Fragment>
        <SearchBar onSearch={fetchCountryByName}/>
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
    </Fragment>
  )
}
