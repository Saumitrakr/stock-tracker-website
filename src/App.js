import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from "./Pages/Homepage";
import Stockpage from "./Pages/Stockpage";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/stock-details/:id' Component={Stockpage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
