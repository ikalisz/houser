import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'

function App() {
  return (
    <section className="appBody">
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    </section>
  );
}

export default App;
