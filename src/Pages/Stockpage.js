import React, { useEffect } from 'react';
import axios from 'axios';

const Stockpage = () => {
  useEffect(() => {
    const fetchData = async () => {


      const options = {
        method: 'GET',
        url: 'https://finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com/get-social-list',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '109abd27c0msh2581bd8d2047132p155247jsn03abddc5a254',
          'X-RapidAPI-Host': 'finance-social-sentiment-for-twitter-and-stocktwits.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>Stockpage</div>;
};

export default Stockpage;
