import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();

    console.log(blogs);
  });
  const fetchBlogs = async () => {
    const data = await axios.get('/api/blogs');

    setBlogs(data);
  };
  return <>{blogs.name}</>;
};

export default HomeScreen;
