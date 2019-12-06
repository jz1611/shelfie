import React from 'react';

import './Header.css';

const logo = require('./shelfie_icon.png');

function Header() {
  return (
    <div className="header">
      <img className="logo" src={ logo } />
      <h1>SHELFIE</h1>
    </div>
  )
}

export default Header;