import { useState } from "react";
import './SearchBar.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {RiArrowDropDownLine} from 'react-icons/ri';


const SearchBar = ({onSearch})=>{
    const [searchInput, setSearchInput] = useState("");
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSearch(searchInput);
     }
    const handleChange =(event)=>{
        setSearchInput(event.target.value);
        onSearch(searchInput);
        console.log(searchInput);
    }
    return(
        <div className='country-search'>
        <form className='search-form' onSubmit={handleSubmit}>
        <AiOutlineSearch className='search-icon'/>
        <input type='text' name='search'placeholder='Search for a country...' value={searchInput} onChange={handleChange}></input>
        </form>
        <div className='select-country'>
          <div className='filter-religion'>
            <span>Filter by Region <RiArrowDropDownLine className='drop'/></span>
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
export default SearchBar;