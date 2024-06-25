import React from 'react';
import Logo from './Logo';
import GithubLink from './GithubLink';
import './TopBar.css';

const version = '27.x'

function TopBar () {
  return (
    <div className='mdl-layout__header top-bar'>
      <div className='mdl-layout__header-row'>
        <a
          className='header-knots-link'
          href='https://bitcoinknots.org/'
          target='_blank'
        >
          <Logo title='Bitcoin Knots' width={50} height={50} />
        </a>
        <div className='mdl-layout-spacer' />
        <span className='mdl-layout-title title-long'>Bitcoin Knots Config Generator (compatible with Knots {version})</span>
        <span className='mdl-layout-title title-short'>Config Generator (Knots {version})</span>
        <div className='mdl-layout-spacer' />
        <GithubLink className='header-github-link' />
      </div>
    </div>
  );
}

export default TopBar;
