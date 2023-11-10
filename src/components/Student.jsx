import React from 'react';

const Student = ({ name, bio, scores }) => (
  <div>
    <h2>{name}</h2>
    <p>{bio}</p>
    <h3>Scores:</h3>
    {scores.map((score, index) => (
      <div key={index}>
        <p>Date: {score.date}</p>
        <p>Score: {score.score}</p>
      </div>
    ))}
  </div>
);

export default Student;
