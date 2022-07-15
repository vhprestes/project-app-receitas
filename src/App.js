import React from 'react';
import './App.css';
import ProviderRecipes from './context/Provider';
import Routes from './routes/Routes';

function App() {
  return (
    <ProviderRecipes>
      <Routes />
    </ProviderRecipes>
  );
}

export default App;
