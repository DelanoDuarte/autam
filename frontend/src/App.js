import React from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';

import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <div>
      <SnackbarProvider anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
