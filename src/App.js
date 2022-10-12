import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {Originals,Action,Romance,Thriller,Mystery,Family,Comedy} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url = { Originals } title='Netflix Originals' />
      <RowPost url = { Action } title='Action ' isSmall />
      <RowPost url = { Mystery } title='Mystery ' isSmall />
      <RowPost url = { Family } title='Family ' isSmall />
      <RowPost url = { Comedy } title='Comedy ' isSmall />
      <RowPost url = { Romance } title='Romance ' isSmall />
      <RowPost url = { Thriller } title='Thriller ' isSmall />
    </div>
  );
}

export default App;
