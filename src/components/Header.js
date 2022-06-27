import React from 'react';

export default function Header() {
  return (
    <nav>
      <div className="nav--container">
        <img
          className="nav--logo"
          src="./img/troll-face.svg"
          alt="troll face"
        />
        <h1 className="nav--title">Meme Generator</h1>
        <h2 className="nav--description">React Course - Project 3</h2>
      </div>
    </nav>
  );
}
