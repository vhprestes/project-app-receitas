import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import ProviderRecipes from './context/Provider';

function App() {
  return (
    <ProviderRecipes>
      <Login />
    </ProviderRecipes>
  );
}

export default App;
