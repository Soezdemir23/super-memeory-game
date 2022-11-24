# Super Memory Game: Pepe Edition

## If you want to play it on your computer:

+ clone it
+ `npm ci `, to install required packages conservatively. Alternatively smash that `npm install` on your terminal and hit enter
+ `npm run start`

## If you want to play it on the browser:
scroll down :)

## What is a memorygame?

It's basically a series of cards or pictures that shuffle each time you choose a card
if you manage to click all the cards that you didn't choose before, the difficulty increases
by raising the nuber of pictures to choose from.

## What was it built with?

+ Typescript
+ Tailwind
+ React
+ The informations feed from: https://rarepepewallet.com
+ for the shuffling algorithm, I used the Fisher-Yates algorithm that was provided by the author James Bubb
  + https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

## What's left?

Probably a working loading screen while the cards are loading and move the footer content into the middle with a link to my profile.

Link to game: https://soezdemir23.github.io/super-memeory-game/

## What was difficult?
Apart from trying to understand where to use hooks like useEffect and/or if I even need flushSync, 
I had the problem understanding where to use the Fisher-Yates algorithm. I used it inside a useEffect, then flushSync.
Both of them break the app.
Finally I moved it to the Component where the cards are being rendered as a middle man, which didn't really mess up the state, 
but mixed up the arrangement of the cards as needed.

THEN the biggest issue for me was trying to deploy it into gh-pages. Very difficult if you deviate from the instructions just a little bit.
Hence it is so important to have saved up all the progress so far.
