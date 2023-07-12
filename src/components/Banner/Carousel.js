import React, { useEffect } from 'react'
import axios from 'axios'
import { TrendingStocks } from '../../config/api'
import { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './Bannerstyle.css';



const Carousel = () => {

    const [trending, setTrending] = useState([])

    const fetchTrendingStocks = async() =>{
        const {data} = await axios.get(TrendingStocks())
        setTrending(data.coins)
        // console.log(data)
    }
    useEffect(()=>{
        fetchTrendingStocks();
    },[])

    const items = trending.map((coin) => {
        const price = coin?.item.price_btc * 2500000;
        return (
            <div className='carouselItem'>
                <a href={`/Stocks/${coin.item.id}`}>
                    <img src={coin?.item.large} alt={coin.item.name}></img>
                </a>
                <div className='detail'>
                    <span>
                        {coin?.item.symbol}
                    </span>
                    <span>
                        {price.toFixed(2)} INR
                    </span>
                </div>
            </div>
        )
    });

    const stagePadding = {
        paddingLeft: 30, // Adjust the padding as needed
        paddingRight: 30, // Adjust the padding as needed
      };

      const responsive = {
        0: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 },
      };
    

    // console.log(trending)

  return (
    <div className='carousel'>
        <AliceCarousel 
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={5000}
            disableDotsControls
            responsive={responsive}
            autoPlay
            items={items}
            stagePadding={stagePadding}
        />
    </div>
  )
}

export default Carousel