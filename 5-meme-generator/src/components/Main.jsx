import { useState } from "react";
import { useEffect } from "react";

/**
 * Challenge: move the hardcoded meme info into React
 * state. Use an object with `topText`, `bottomText`,
 * and `image` properties, and set the initial values to
 * the ones hardcoded below.
 */

export default function Main() {
  const [memeList, setMemeList] = useState([]);
  const [meme, setMeme] = useState({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memeList.length);
    const newMemeUrl = memeList[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, imageUrl: newMemeUrl }));
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  // useEffect is guaranteed to run after the elements are painted to the page - can never be an async function
  useEffect(() => {
    // any code with a side effect outside of react ecosystem EG: API calls
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeList(data.data.memes));
    // you can return a cleanup function in useEffect to unregister listeners, etc.
  }, []); // array values that react will watch between renders. If any of them change, react knows to re-run the UseEffect function
  // empty dependency array will cause the useEffect function to only ever run once
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
