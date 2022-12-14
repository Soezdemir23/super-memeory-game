# Super Memory Game: Pepe Edition

## If you want to play it on your computer:

+ clone it
+ `npm ci `, to install required packages conservatively. Alternatively smash that `npm install` on your terminal and hit enter
+ `npm run start`

## If you want to play it on the browser:
Link to game: https://soezdemir23.github.io/super-memeory-game/

## What is a memorygame?

Basically it works like this:
1. choose a card
2. the game shuffles the cards
3. try not to choose a card you have chosen before

If you win the round, there will be more cards added to increase the difficulty.

## What was it built with?

+ Typescript
+ Tailwind
+ React
+ The informations feed from: https://rarepepewallet.com
+ for the shuffling algorithm, I used the Fisher-Yates algorithm that was provided by the author James Bubb
  + https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

## What's left?

Probably a working loading screen while the cards are loading and move the footer content into the middle with a link to my profile.
Of course: I need to come back later and refactor the code. Move interfaces to its own file, since they are needlessly cluttering the interface
All a dev needs to know is what these props mean and they can see it by hovering their mouse over the respective data.



## What was difficult?
Apart from trying to understand where to use hooks like useEffect and/or if I even need flushSync, 
I had the problem understanding where to use the Fisher-Yates algorithm. I used it inside a useEffect, then flushSync.
Both of them break the app.
Finally I moved it to the Component where the cards are being rendered as a middle man, which didn't really mess up the state, 
but mixed up the arrangement of the cards as needed.

THEN the biggest issue for me was trying to deploy it into gh-pages. Very difficult if you deviate from the instructions just a little bit.
Hence it is so important to have saved up all the progress so far.
