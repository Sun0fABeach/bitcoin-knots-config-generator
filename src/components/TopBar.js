import React from 'react';
import logo from '../knots_logo.svg'
import './TopBar.css';

const version = '26.x'

function TopBar () {
  return (
    <div className='mdl-layout__header'>
      <div className='mdl-layout__header-row top-bar'>
        <img src={logo} alt="Knots logo" width="50" height="50" />
        <div className='mdl-layout-spacer' />
        <span className='mdl-layout-title title-long'>Bitcoin Knots Config Generator (compatible with Knots {version})</span>
        <span className='mdl-layout-title title-short'>Config Generator (Knots {version})</span>
        <div className='mdl-layout-spacer' />
      </div>
    </div>
  );
}

export default TopBar;
