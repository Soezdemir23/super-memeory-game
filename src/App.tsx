import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import feed from  './feed.json'
import {useState, useEffect} from 'react';

function App() {
  const [usedFeeds,setUsedFeeds] = useState<null | string[]>(null)

  function pickPepeURLs(numOfCards: number) {
    const urlArray: string[] = []
    while (urlArray.length < numOfCards) {
      // create a random number to pick a number
      let randomNumber = Math.ceil(Math.random() * Object.keys(feed).length)
      // then return a key from the feed.json's Object key array
      let feedKey = Object.keys(feed)[randomNumber]
      // we are traversing through the loop and use key, value of loop
      // this allows me to skip the object typing I am not sure yet how to do it
      for (const [key, value] of Object.entries(feed)) {
        // if the key is found, return back to the while loop if it exists in the array
        if(key === feedKey) {
          if (urlArray.includes(value.img_url) === true) {
            break;
          }
          // else add the address into the array
          urlArray.push(value.img_url);
        }
      }
    }
    return urlArray;
  }
  // A kind user told me, that i am setting state on every render if I don't use it in this manner
  // this is an initial render
  useEffect(()=>{
    setUsedFeeds(pickPepeURLs(40))
  }, [])
  return (
    <div className='flex flex-col min-h-screen bg-green-600 '>
      <Header />
      <Main urls={usedFeeds}/>
      
      <Footer />
    </div>
  );
}

export default App;
