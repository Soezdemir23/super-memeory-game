import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import feed from  './feed.json'
import {useRef} from 'react';

function App() {
  const readyCardsRef = useRef<string[]>([])
  const memeKeysRef = useRef<string[]>(Object.keys(feed))
  function pickPepeURLs(numOfCards: number) {
    while (readyCardsRef.current.length < numOfCards) {
      let random = Math.ceil(Math.random() * Object.keys(feed).length)
      // we are traversing through the loop and return the object
      for (const [key, value] of Object.entries(feed)) {
        
      }
        
      
    }
  }
  

  
  
  
  return (
    <div className='flex flex-col min-h-screen bg-green-600 '>
      <Header />
      <Main
      />
      <Footer />
    </div>
  );
}

export default App;
