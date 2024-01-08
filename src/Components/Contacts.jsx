import React from 'react';

const Contact = ({ name, title, bio }) => {
  return (
    <div className="contact">
      <div className="avatar-placeholder"></div>
      <div className="contact-info">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Contact;