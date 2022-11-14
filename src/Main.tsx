interface cardProps {
  urls: null | string[];
}

export default function Main({ urls }: cardProps) {
  let count = 0;
  // need to think of something when I can display a "Loading screen component" until all images are loaded
  const allLoaded = () => {
    count++;
    if (count === urls?.length) {
      count = 0;
      return true;
    }
    return false;
  };

  //call a function that returns spin on the card.
  const spinClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    spin();
  };

  function spin() {}
  /**So I want the card to not only enlarge, but I also want the image to transform a
   * bit based on the mouse position when it is hovered on it.
   * Then I also want it to shine, when I press on it and keep the shiny background, animation
   * Then ... I don't know anymore
   */
  return (
    <main className="grid gap-x-1 gap-y-5 pt-8 hover: justify-items-center grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
      {urls?.map((url) => (
        <div className="hover:scale-150 w-32 sm:w-40 xl:w-52">
          <div
            className={
              " hover:animate-spin-horizontal"
            }
            
          >
            <img
              className="rounded-xl"
              onLoad={allLoaded}
              src={url}
              alt=""
            ></img>
          </div>
        </div>
      ))}
    </main>
  );
}
