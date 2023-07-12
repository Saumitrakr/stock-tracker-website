export const StockList = (stockSymbol) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}.BSE&outputsize=full&apikey=BHFF827V5BPK95FG`;


export const SingleStock = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingStocks = () =>
  `https://api.coingecko.com/api/v3/search/trending`;


  // BHFF827V5BPK95FG
  // NnNCRjVCaEw5OG5sdk5VQkMwRFowVVdDUkRiQzVVZlVxZXRTRlNaUC1EMD0

  // const NSEStocks = [
  //   { stockname: "5Paisa", stocksymbol: "5PAISA" },
  //   { stockname: "ACC Limited", stocksymbol: "ACC" },
  //   { stockname: "Adani Gas Limited", stocksymbol: "ADANIGAS" },
  //   { stockname: "Adani Green Energy Limited", stocksymbol: "ADANI GREEN" },
  //   { stockname: "Adani Ports and Special Economic Zone Limited", stocksymbol: "ADANIPORTS" },
  //   { stockname: "Adani Power Limited", stocksymbol: "ADANIPOWER" },
  //   { stockname: "Adani Transmission Limited", stocksymbol: "ADANITRANS" },
  //   { stockname: "Aditya Birla Capital Limited", stocksymbol: "ABCAPITAL" },
  //   { stockname: "Aditya Birla Fashion and Retail Limited", stocksymbol: "ABFRL" },
  //   { stockname: "Aditya Birla Money Limited", stocksymbol: "BIRLAMONEY" },
  //   { stockname: "Apollo Hospitals Enterprise Limited", stocksymbol: "APOLLOHOSP" },
  //   { stockname: "Apollo Tyres Limited", stocksymbol: "APOLLOTYRE" },
  //   { stockname: "AU Small Finance Bank Limited", stocksymbol: "AUBANK" },
  //   { stockname: "Avenue Supermarts Limited", stocksymbol: "DMART" },
  //   { stockname: "Axis Bank Limited", stocksymbol: "AXISBANK" },
  //   { stockname: "Baba Agro Food Limited", stocksymbol: "BABAFOOD" },
  //   { stockname: "Bajaj Auto Limited", stocksymbol: "BAJAJ-AUTO" },
  //   { stockname: "Bajaj Electricals Limited", stocksymbol: "BAJAJELEC" },
  //   { stockname: "Bajaj Finance Limited", stocksymbol: "BAJFINANCE" },
  //   { stockname: "Bajaj Finserv Limited", stocksymbol: "BAJAJFINSV" },
  //   { stockname: "Bank of Baroda", stocksymbol: "BANKBARODA" },
  //   { stockname: "Bank of India", stocksymbol: "BANKINDIA" },
  //   { stockname: "Bata India Limited", stocksymbol: "BATAINDIA" },
  //   { stockname: "Berger Paints (I) Limited", stocksymbol: "BERGEPAINT" },
  //   { stockname: "Bharat Electronics Limited", stocksymbol: "BEL" },
  //   { stockname: "Bharat Heavy Electricals Limited", stocksymbol: "BHEL" },
  //   { stockname: "Bharat Petroleum Corporation Limited", stocksymbol: "BPCL" },
  //   { stockname: "Bharti Airtel Limited", stocksymbol: "BHARTIARTL" },
  //   { stockname: "Biocon Limited", stocksymbol: "BIOCON" },
  //   { stockname: "Birla Tyres Limited", stocksymbol: "BIRLATYRE" },
  //   { stockname: "Bkm Industries Limited", stocksymbol: "BKMINDST" },
  //   { stockname: "Bosch Limited", stocksymbol: "BOSCHLTD" },
  //   { stockname: "BPL Limited", stocksymbol: "BPL" },
  //   { stockname: "Brightcom Group Limited", stocksymbol: "BCG" },
  //   { stockname: "Britannia Industries Limited", stocksymbol: "BRITANNIA" },
  //   { stockname: "Canara Bank", stocksymbol: "CANBK" },
  //   { stockname: "Castrol India Limited", stocksymbol: "CASTROLIND" },
  //   { stockname: "CEAT Limited", stocksymbol: "CEATLTD" },
  //   { stockname: "Central Bank of India", stocksymbol: "CENTRALBK" },
  //   { stockname: "Cholamandalam Financial Holdings Limited", stocksymbol: "CHOLAHLDNG" },
  //   { stockname: "Cholamandalam Investment and Finance Company Limited", stocksymbol: "CHOLAFIN" },
  //   { stockname: "Cipla Limited", stocksymbol: "CIPLA" },
  //   { stockname: "Coal India Limited", stocksymbol: "COALINDIA" },
  //   { stockname: "Colgate Palmolive (India) Limited", stocksymbol: "COLPAL" },
  //   { stockname: "Dabur India Limited", stocksymbol: "DABUR" },
  //   { stockname: "Dr. Reddy's Laboratories Limited", stocksymbol: "DRREDDY" },
  //   { stockname: "Eicher Motors Limited", stocksymbol: "EICHERMOT" },
  //   { stockname: "Edelweiss Financial Services Limited", stocksymbol: "EDELWEISS" },
  //   { stockname: "Eveready Industries India Limited", stocksymbol: "EVEREADY" },
  //   { stockname: "Everest Industries Limited", stocksymbol: "EVERESTIND" }
  // ];