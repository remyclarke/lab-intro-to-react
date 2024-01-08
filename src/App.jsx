// src/App.jsx
import React from 'react';
import Navbar from './Components/NavBar'; 
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts';
import ContactList from './Components/ContactUserCard';
import './index.css'; 

const mockUser = {
  name: 'Jordan Walke',
  title: 'React Creator',
  bio: 'Lorem Ipsum'
};

const mockPosts = [
  { title: 'Post 1', content: 'Lorem Ipsum' },
  { title: 'Post 2', content: 'Lorem Ipsum' },
  { title: 'Post 3', content: 'Lorem Ipsum' }
];

const mockContacts = [
  { name: 'Dan Abramov', title: 'React Developer', bio: 'Lorem Ipsum' },
  { name: 'Ryan Florence', title: 'React Router Author', bio: 'Lorem Ipsum' },
  { name: 'Kent C. Dodds', title: 'Educator', bio: 'Lorem Ipsum' }

];

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <UserProfile {...mockUser} />
      <Posts posts={mockPosts} />
      <ContactList contacts={mockContacts} />
     
    </div>
  );
};

export default App;