import React from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';

import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';


function App() {
  return (
    <div >
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
