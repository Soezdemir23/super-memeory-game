interface cardProps {
  urls: null | string[];
}

export default function Main({ urls }: cardProps) {
  let count = 0;
  // need to think of something when I can display a "Loading screen component" until all images are loaded

  return (
    <main>
      {urls?.map((url) => (
        <div>
          <img src={url} alt=""></img>
        </div>
      )) }
    </main>
  )
}
