import React from 'react';
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
