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
  const [gameOver, setGameOver] = useState(false);
  const chosenFeeds = useRef<string[]>([]);
  const [winRound, setWinRound] = useState(false);
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
    setUsedFeeds(pickPepeURLs(countRef.current));
  }, []);

  // TODO: need to check if chosenFeeds is already populated with the object id
  function onClickCheck(e: React.MouseEvent<HTMLDivElement>) {
    setUsedFeeds(
      usedFeeds?.map((objecto) => {
        if (objecto.id === e.currentTarget.dataset.key) {
          // if the same card has been chosen then disply the gameoverscreen
          if (chosenFeeds.current.includes(objecto.id) === true) {
            flushSync(() => {
              setGameOver(true);
            });
          }
          chosenFeeds.current.push(objecto.id);
          objecto.pressed = true;
          return objecto;
        }
        return objecto;
      })
    );
    //also check here if the number of true clicks are equal to the countRef.current
    if (
      usedFeeds?.filter((pepes) => pepes.pressed === true).length ===
      countRef.current
    ) {
      setWinRound(true);
    }
  }

  // I tested this outside while my fingers got cold. No need for useEffect!
  if (winRound === true) {
    console.log("you win"); // change something here to facilitate a 5 second loading screen until I find out how to intercept the images.
    setWinRound(false);
    countRef.current = countRef.current + 3;
    setUsedFeeds(pickPepeURLs(countRef.current));
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

  if (gameOver === true) {
    return (
      <div className="flex bg-green-600 min-h-screen">
        <h1 className="justify-center grow flex self-center text-9xl">
          <span className="animate-spin-horizontal">GA</span>
          <span className="animate-ping">ME</span>
          <span className="animate-bounce">OV</span>
          <span className="animate-spin">ER</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-green-600 ">
      <Header />
      <Main urls={usedFeeds} onClick={onClickCheck} />

      <Footer />
    </div>
  );
}

export default App;
