import React from 'react'
import './Country.style.css';
import CountryImg from '../../assets/germany.png';


export const Country = () => {
  return (
    <div className='container'>
    <div className='card'>
        <img src={CountryImg} alt='cont'></img>
        <h1>Germany</h1>
        <p>Population: <span>8989888</span></p>
        <p>Region: <span>Europ</span></p>
        <p>Capital: <span>Berlin</span></p>
    </div>
    </div>
  )
}
