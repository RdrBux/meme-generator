import React, { useState, useEffect } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    img: 'http://i.imgflip.com/1bij.jpg',
  });

  const [memesIMG, setMemesIMG] = useState([]);
  useEffect(() => {
    async function data() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setMemesIMG(data.data.memes);
    }
    data();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setMeme((prevState) => ({
      ...prevState,
      img: memesIMG[Math.floor(Math.random() * memesIMG.length)].url,
    }));
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
          onChange={handleInput}
          value={meme.topText}
          name="topText"
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
          onChange={handleInput}
          value={meme.bottomText}
          name="bottomText"
        />
        <button className="form--btn">Get a new meme image 🖼</button>

        <div className="form--img-container">
          <img className="form--img" src={meme.img} alt="meme with text" />
          <h1 className="form--img-text form--img-top">{meme.topText}</h1>
          <h1 className="form--img-text form--img-bottom">{meme.bottomText}</h1>
        </div>
      </form>
    </main>
  );
}
