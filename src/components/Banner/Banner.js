import React from 'react';
import './Bannerstyle.css';
import Carousel from './Carousel';
const Banner = () => {
  return (
    <div className='Banner'>
        <div className='bannerContent'>
            <div className='tagline'>
                <h2>Stock Tracker</h2>
                <p>Explore the future with some trending crypto coins !!!</p>
            </div>
            <Carousel />
        </div>
    </div>
  )
}

export default Banner