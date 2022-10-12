import React from 'react'
import Routes from './Routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div >
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
