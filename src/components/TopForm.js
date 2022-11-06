import React from 'react';
import './TopForm.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {RiArrowDropDownLine} from 'react-icons/ri';


export const TopForm = () => {
  return (
    <div className='country-search'>
        <form className='search-form'>
        <AiOutlineSearch className='search-icon'/>
        <input type='text' name='search'placeholder='Search for a country...'></input>
        </form>
        <div className='select-country'>
          <div className='filter-religion'>
            <h2>Filter by Region <RiArrowDropDownLine className='drop'/></h2>
          </div>
          <div className='region-list'>
            <p>Africa</p>
            <p>America</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>Oceania</p>
          </div>
        </div>
    </div>
  )
}
