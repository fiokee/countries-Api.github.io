import React from 'react';
import './Header.css';
import {BsMoon} from 'react-icons/bs';

export const Header = () => {
  return (
    <div className='nav-header'>
        <h2>Where in the World?</h2>
        <h2 className='dark'><BsMoon/>Dark Mode</h2>
    </div>
  )
}
