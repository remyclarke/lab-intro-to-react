import React from 'react';

const UpdateCard = ({ title, content }) => {
  return (
    <div className="update-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default UpdateCard;