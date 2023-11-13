import React from 'react';

const Student = ({ name, bio, scores }) => (
  <div>
    <h2>{name}</h2>
    <p>{bio}</p>
    {scores.map((score, index) => (
      <div key={index}>
        <p>Date: {score.date}</p>
        <p>Score: {score.score}</p>
      </div>
    ))}
  </div>
);

export default Student;
