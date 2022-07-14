import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
