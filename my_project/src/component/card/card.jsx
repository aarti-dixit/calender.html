import "./card.css";

import React, { useState, useEffect } from "react";


const Card = ({ heading, descr }) => {
  const storageKey = `likes-${heading}`;
  const [likes, setLikes] = useState(0);

  // Load like count from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem(storageKey);
    if (storedLikes) {
      setLikes(Number(storedLikes));
    }
  }, [storageKey]);

  // Update localStorage when like changes
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(storageKey, newLikes);
  };

  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>{descr}</p>

      <div className="like-section">
        <button onClick={handleLike}>👍 Like</button>
        <span>{likes} {likes === 1 ? "like" : "likes"}</span>
      </div>
    </div>
  );
};

export default Card;
