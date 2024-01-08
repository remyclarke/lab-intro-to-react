import React from 'react';

const Post = ({ title, content }) => {
  return (
    <article className="post">
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

export default Post;