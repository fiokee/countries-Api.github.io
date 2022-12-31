import React, {useState, useEffect} from 'react'
import './Country.style.css';
import CountryImg from '../../assets/germany.png';


export const Country = () => {
  // function fetchCountries(){
  //   fetch('https://restcountries.com/v3.1/all').then(response =>{
  //     return response.json()
  //   }).then(data =>{
  //     console.log(data)
  //   });
  // }

  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all').then(response =>{
      return response.json()
    }).then(data =>{ console.log(data)})
  },[])

  return (
    <div className='container'>
    <div className='card'>
        <img src={CountryImg} alt='cont'></img>
        <h1>Germany</h1>
        <p>Population: <span>8989888</span></p>
        <p>Region: <span>Europ</span></p>
        <p>Capital: <span>Berlin</span></p>
    </div>
    {/* <button onClick={fetchCountries}></button> */}
    </div>
  )
}
