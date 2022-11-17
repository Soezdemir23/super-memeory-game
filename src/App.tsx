import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import feed from "./feed.json";
import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { pepeObject } from "./interfaces";
function App() {
  const countRef = useRef(4);
  const newGameRef = useRef(true);
  const winRoundRef = useRef(true);
  const [usedFeeds, setUsedFeeds] = useState<null | undefined | pepeObject[]>(
    null
  );

  function pickPepeURLs(numOfCards: number) {
    const pepeList: pepeObject[] = [];
    while (pepeList.length < numOfCards) {
      // create a random number to pick a number
      let randomNumber = Math.ceil(Math.random() * Object.keys(feed).length);
      // then return a key from the feed.json's Object key array
      let feedKey = Object.keys(feed)[randomNumber];
      // we are traversing through the loop and use key, value of loop
      // this allows me to skip the object typing I am not sure yet how to do it
      for (const [key, value] of Object.entries(feed)) {
        // we traverse the feed, see if the random word exists
        if (key === feedKey)
          if (pepeList.filter((pepe) => pepe.id === key).length > 0) {
            // check if the random word
            break;
          } else {
            // push to the pepeList that we will later set
            pepeList.push({ id: key, pressed: false, url: value.img_url });
          }
      }
    }
    return pepeList;
  }


  // A kind user told me, that i am setting state on every render if I don't use it in this manner
  // this is an initial render
  useEffect(() => {
    
    if(newGameRef.current === true) {
      setUsedFeeds(pickPepeURLs(countRef.current));
      newGameRef.current = !newGameRef.current;
    } else if (usedFeeds?.filter(pepeObject => pepeObject.pressed === true).length === countRef.current) {
      // this causes an infinite loop
      countRef.current = countRef.current + 3;
      setUsedFeeds(pickPepeURLs(countRef.current))
      countRef.current = 0;
      
    }
    
  }, [usedFeeds]);

  function onClickCheck(e: React.MouseEvent<HTMLDivElement>) {
    setUsedFeeds(usedFeeds?.map((objecto) => {
      if (objecto.id === e.currentTarget.dataset.key) {
        objecto.pressed = true;
        return objecto
      }return objecto
    }))
  }


  /*function spinConfirmClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e.currentTarget.dataset.key);
    const changedPepes = usedFeeds?.map((pepe) => {
      if (pepe.id === e.currentTarget.dataset.key) {
        pepe.pressed = !pepe.pressed;
        return pepe;
      }
      return pepe;
    });
    setUsedFeeds(changedPepes);
  }*/
  return (
    <div className="flex flex-col min-h-screen bg-green-600 ">
      <Header />
      <Main 
      urls={usedFeeds} 
      onClick={onClickCheck} 
      
      />

      <Footer />
    </div>
  );
}

export default App;
