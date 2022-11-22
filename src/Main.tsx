import { useRef, useState } from "react";
import { cardProps, pepeObject } from "./interfaces";

export default function Main({
   urls,
  onClick 
  }: cardProps) {
  let countRef = useRef(0)
  const [loaded, setLoaded] = useState(false)
  // need to think of something when I can display a "Loading screen component" until all images are loaded
  // HOW do I use it for a loading screen? I need to make one.
  const allLoaded = () => {
    countRef.current = countRef.current +1;
    if (countRef.current === urls?.length) {
      countRef.current = 0;
      setLoaded(true)
    }
    setLoaded(false);
  };
  const shuffler = (urls: pepeObject[] |undefined | null) => {
    
    if (urls === undefined || urls === null) return urls;
    let arrayPepes: pepeObject[] = urls
    for (let i = urls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = urls[i];
      urls[i] = urls[j];
      urls[j] = temp;
    } return arrayPepes
  } 
  

  /**So I want the card to not only enlarge, but I also want the image to transform a
   * bit based on the mouse position when it is hovered on it.
   * Then I also want it to shine, when I press on it and keep the shiny background, animation
   * Then ... I don't know anymore
   */

  return (
    <main className="grid grow gap-x-1 gap-y-5 pt-8 hover: justify-items-center items-center grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
      {shuffler(urls)?.map((url) => (
        <div
          key={url.id}
          data-key={url.id}
          className="hover:scale-110 w-32 sm:w-40 xl:w-52"
          onClick={onClick}
        >
          <div //className={url.pressed === true ? "animate-spin-horizontal" : ""}
          >
            <img
              className="rounded-xl"
              onLoad={allLoaded}
              src={url.url}
              alt=""
            ></img>
          </div>
        </div>
      ))}
    </main>
  );
}
