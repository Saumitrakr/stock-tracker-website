import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { StockList } from '../config/api';
import '../components/StockTable.css';
import { LinearProgress, Table, TableRow, TableCell, TableHead, TextField, TableBody, TablePagination } from '@mui/material';

const StockTable = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  

  const NSEStocks = [
    { stockname: "5Paisa", stocksymbol: "5PAISA" },
    { stockname: "ACC Limited", stocksymbol: "ACC" },
    { stockname: "Adani Gas Limited", stocksymbol: "ADANIGAS" },
    { stockname: "Adani Green Energy Limited", stocksymbol: "ADANI GREEN" },
    { stockname: "Adani Ports and Special Economic Zone Limited", stocksymbol: "ADANIPORTS" },
    { stockname: "Adani Power Limited", stocksymbol: "ADANIPOWER" },
    { stockname: "Adani Transmission Limited", stocksymbol: "ADANITRANS" },
    { stockname: "Aditya Birla Capital Limited", stocksymbol: "ABCAPITAL" },
    { stockname: "Aditya Birla Fashion and Retail Limited", stocksymbol: "ABFRL" },
    { stockname: "Aditya Birla Money Limited", stocksymbol: "BIRLAMONEY" },
    { stockname: "Apollo Hospitals Enterprise Limited", stocksymbol: "APOLLOHOSP" },
    { stockname: "Apollo Tyres Limited", stocksymbol: "APOLLOTYRE" },
    { stockname: "AU Small Finance Bank Limited", stocksymbol: "AUBANK" },
    { stockname: "Avenue Supermarts Limited", stocksymbol: "DMART" },
    { stockname: "Axis Bank Limited", stocksymbol: "AXISBANK" },
    { stockname: "Baba Agro Food Limited", stocksymbol: "BABAFOOD" },
    { stockname: "Bajaj Auto Limited", stocksymbol: "BAJAJ-AUTO" },
    { stockname: "Bajaj Electricals Limited", stocksymbol: "BAJAJELEC" },
    { stockname: "Bajaj Finance Limited", stocksymbol: "BAJFINANCE" },
    { stockname: "Bajaj Finserv Limited", stocksymbol: "BAJAJFINSV" },
    { stockname: "Bank of Baroda", stocksymbol: "BANKBARODA" },
    { stockname: "Bank of India", stocksymbol: "BANKINDIA" },
    { stockname: "Bata India Limited", stocksymbol: "BATAINDIA" },
    { stockname: "Berger Paints (I) Limited", stocksymbol: "BERGEPAINT" },
    { stockname: "Bharat Electronics Limited", stocksymbol: "BEL" },
    { stockname: "Bharat Heavy Electricals Limited", stocksymbol: "BHEL" },
    { stockname: "Bharat Petroleum Corporation Limited", stocksymbol: "BPCL" },
    { stockname: "Bharti Airtel Limited", stocksymbol: "BHARTIARTL" },
    { stockname: "Biocon Limited", stocksymbol: "BIOCON" },
    { stockname: "Birla Tyres Limited", stocksymbol: "BIRLATYRE" },
    { stockname: "Bkm Industries Limited", stocksymbol: "BKMINDST" },
    { stockname: "Bosch Limited", stocksymbol: "BOSCHLTD" },
    { stockname: "BPL Limited", stocksymbol: "BPL" },
    { stockname: "Brightcom Group Limited", stocksymbol: "BCG" },
    { stockname: "Britannia Industries Limited", stocksymbol: "BRITANNIA" },
    { stockname: "Canara Bank", stocksymbol: "CANBK" },
    { stockname: "Castrol India Limited", stocksymbol: "CASTROLIND" },
    { stockname: "CEAT Limited", stocksymbol: "CEATLTD" },
    { stockname: "Central Bank of India", stocksymbol: "CENTRALBK" },
    { stockname: "Cholamandalam Financial Holdings Limited", stocksymbol: "CHOLAHLDNG" },
    { stockname: "Cholamandalam Investment and Finance Company Limited", stocksymbol: "CHOLAFIN" },
    { stockname: "Cipla Limited", stocksymbol: "CIPLA" },
    { stockname: "Coal India Limited", stocksymbol: "COALINDIA" },
    { stockname: "Colgate Palmolive (India) Limited", stocksymbol: "COLPAL" },
    { stockname: "Dabur India Limited", stocksymbol: "DABUR" },
    { stockname: "Dr. Reddy's Laboratories Limited", stocksymbol: "DRREDDY" },
    { stockname: "Eicher Motors Limited", stocksymbol: "EICHERMOT" },
    { stockname: "Edelweiss Financial Services Limited", stocksymbol: "EDELWEISS" },
    { stockname: "Eveready Industries India Limited", stocksymbol: "EVEREADY" },
    { stockname: "Everest Industries Limited", stocksymbol: "EVERESTIND" }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    // Fetch initial stock data
    fetchStockData();
  },[]);
  
  const fetchStockData = async () => {
    setLoading(true);

    try {
      const stockDataPromises = NSEStocks.map(async (stock) => {
        const response = await axios.get(StockList(stock.stocksymbol));
        return {
          ...stock,
          data: response.data          
        };
        
      });

      const stockData = await Promise.all(stockDataPromises);
      console.log(stockData)
      setStocks(stockData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const searchValue = event.target.value;
      const matchingStock = NSEStocks.find(
        (stock) => stock.stockname.toLowerCase() === searchValue.toLowerCase()
      );

      if (matchingStock) {
        setSearch(matchingStock.stocksymbol);
        fetchStocks(matchingStock.stocksymbol);
      } else {
        setSearch('');
        setStocks([]);
      }
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const matchingStock = NSEStocks.find(
      (stock) => stock.stockname.toLowerCase() === searchValue.toLowerCase()
    );

    if (matchingStock) {
      setSearch(matchingStock.stocksymbol);
      fetchStocks(matchingStock.stocksymbol);
    } else {
      setSearch('');
      setStocks([]);
    }
  };

  const fetchStocks = async (symbol) => {
    setLoading(true);

    try {
      const response = await axios.get(StockList(symbol));
      setStocks([
        {
          stockname: search,
          stocksymbol: symbol,
          data: response.data['Time Series (Daily)']
        }
      ]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleRowClick = (stockSymbol) => {
    // Perform any additional logic or actions before navigating to the new page
    // Example: pass stockSymbol as a query parameter
    navigate(`/stock-details/${stockSymbol}`);
  };

  console.log(stocks)
  return (
    <div className="themeprovider">
      <div className="container">
        <h4 className="typography">Stock Prices at NSEI</h4>
        <TextField
          className="search"
          label="Search For a Stock..."
          variant="outlined"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />

        {loading ? (
          <p><LinearProgress style={{ backgroundColor: "gold" }} /></p>
        ) : (
          <Table className='table'>
            <TableHead className='thead'>
              <TableRow>
                <TableCell>Stock</TableCell>
                <TableCell>Open</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Low</TableCell>
                <TableCell>Close</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((stock) => (
                <TableRow className='trow' key={stock.stocksymbol} onClick={() => handleRowClick(stock.stocksymbol)}>
                  <TableCell className='tcell'>{stock.stockname}</TableCell>
                  <TableCell>{stock.data && stock.data['1. open']}</TableCell>
                  <TableCell>{stock.data && stock.data['2. high']}</TableCell>
                  <TableCell>{stock.data && stock.data['3. low']}</TableCell>
                  <TableCell>{stock.data && stock.data['4. close']}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <TablePagination
          className='page'
          rowsPerPageOptions={[10, 15, 25, 50]}
          component="div"
          count={stocks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default StockTable;
