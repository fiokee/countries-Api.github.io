import React, { Fragment } from 'react';
import './Header.css';
import {BsMoon} from 'react-icons/bs';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <Fragment>

    <div className='nav-header'>
        <h2>Where in the World?</h2>
        <span className='dark'><BsMoon/>Dark Mode</span>
        
    </div>
    <Outlet/>
    </Fragment>
  )
}
