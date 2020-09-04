import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
