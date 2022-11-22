import { useRef } from "react";
import { cardProps } from "./interfaces";

export default function Main({
   urls,
  onClick 
  }: cardProps) {
  let countRef = useRef(0)
  let loaded = false;
  // need to think of something when I can display a "Loading screen component" until all images are loaded
  const allLoaded = () => {
    countRef.current = countRef.current +1;
    console.log("hi")
    if (countRef.current === urls?.length) {
      console.log("bing bing")
      countRef.current = 0;
      loaded = true
    }
    loaded = false;
  };

  

  /**So I want the card to not only enlarge, but I also want the image to transform a
   * bit based on the mouse position when it is hovered on it.
   * Then I also want it to shine, when I press on it and keep the shiny background, animation
   * Then ... I don't know anymore
   */
  return (
    <main className="grid grow gap-x-1 gap-y-5 pt-8 hover: justify-items-center items-center grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
      {urls?.map((url) => (
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
