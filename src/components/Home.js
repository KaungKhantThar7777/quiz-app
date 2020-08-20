import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <a href="/game" className="btn">
        Start game
      </a>
      <a href="/highScore" className="btn">
        High scores
      </a>
    </div>
  );
};

export default Home;
