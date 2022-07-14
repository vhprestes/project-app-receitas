import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ProviderRecipes from './context/Provider';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <ProviderRecipes>
        <Routes />
      </ProviderRecipes>
    </BrowserRouter>
  );
}

export default App;
