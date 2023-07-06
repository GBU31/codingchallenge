import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://9atc6yw68f.execute-api.us-east-1.amazonaws.com/posts');
      const data = await response.json();
      console.log(data);
      setPosts([data]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <button className="button is-dark">Coding Challenge</button>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <h1 className="Posts_num"> {posts.length} Posts</h1>
      <br />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}

export default App;
