import {useState, useEffect, Fragment} from 'react'
import './Country.style.css';
import CountryImg from '../../assets/germany.png';
import SearchBar from '../search/SearchBar';


export function Country(){
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

//making a call to the api to get some data and renders it
  const fetchCountry = async () => {
    try{
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      if(!response.ok){
        throw new Error(`Failed to fetch countries: ${response.statusText}`)
      }
      const data = await response.json()
      setCountries(data)
      setFilterCountries(data);
      setIsLoading(false)
      console.log(data)
    } catch (error){
      setError(error.message)
    }
  }
  
    useEffect(() => {
      fetchCountry();
    }, [])
 
  return (
    <Fragment>
        <SearchBar setFilterCountries ={setFilterCountries}/>
        <div className='container'>
      {isLoading ? (
        <div className='loader'>Loading...</div> // Display the loader when isLoading is true
      ): (
        filterCountries?.map((country) => (
          <div className='card' key={country.cca3}>
            <img src={country.flags.png} alt='cont'></img>
            <h1>{country.name.common}</h1>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        ))
      )}
    </div>
    </Fragment>
  )
}
