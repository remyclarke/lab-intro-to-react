import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <section id="posts">
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </section>
  );
};

export default Posts;