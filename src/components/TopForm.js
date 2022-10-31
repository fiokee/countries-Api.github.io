import React from 'react';
import './TopForm.css';
import {AiOutlineSearch} from 'react-icons/ai';

export const TopForm = () => {
  return (
    <div className='country-search'>
        <form>
        <AiOutlineSearch className='search-icon'/>
        <input type='text' name='search'placeholder='Search for a country...'></input>
        </form>
        <div className='select-country'>
            <h2>Filter by Religion</h2>
            <p>Africa</p>
            <p>America</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>Oceania</p>
        </div>
    </div>
  )
}
