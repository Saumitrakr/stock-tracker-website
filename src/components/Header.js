import React from 'react';
import '../components/Header.css'
const Header = () => {

  return (
    <div className='AppBar'>
      <div className='Container'>
        <div className='Toolbar'>
          <h3 className='Typography'>
            Stock Tracker
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header