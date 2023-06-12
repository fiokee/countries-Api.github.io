import { useEffect, useState } from "react";
import './SearchBar.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {RiArrowDropDownLine} from 'react-icons/ri';
// import { Country } from "../countries/Country";

const SearchBar = ({setFilterCountries})=>{
  const [countries, setCountries] =useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      
      } catch (error) {
        console.log('error fetching data', error);
      }
    }
    fetchData();
  },[])

  //apply the search terms
  useEffect(()=>{
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase()) &&
      (selectedRegion === "" || country.region.toLowerCase() === selectedRegion.toLowerCase())
    );
      setFilterCountries(filtered)
  }, [searchInput, countries, selectedRegion, setFilterCountries]);
  
const handleSubmit =(e)=>{
  e.preventDefault();
}
    const handleChange =(event)=>{
        setSearchInput(event.target.value);
        console.log(searchInput);
    }

    const handleRegionChange = (event) => {
      setSelectedRegion(event.target.value);
    };
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
            <p onClick={() => handleRegionChange("africa")}>Africa</p>
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