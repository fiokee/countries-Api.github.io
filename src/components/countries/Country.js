import {useState, useEffect} from 'react'
import './Country.style.css';
import CountryImg from '../../assets/germany.png';


export function Country(){
  const [countries, setCountries] = useState([])
  
  const fetchCountry = async () => {
    const response = await fetch(`http://api.countrylayer.com/v2/all?access_key=${`17f78d3e4ae86f29f0d7f90820f40593`}`)
    const data = await response.json()
    setCountries(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCountry()
  }, [])
 
  return (
    <div className='container'>
      {
      countries.map(({name, capital, region })=>(
    <div className='card' key={name}>
        <img src={CountryImg} alt='cont'></img>
        <h1>{name}</h1>
        <p>population: <span>8989888</span></p>
        <p>{region}: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
    </div>
    ))}
    {/* <button onClick=""></button> */}
    </div>
  )
}
