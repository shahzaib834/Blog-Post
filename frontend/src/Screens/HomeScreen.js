import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Grid } from '@mantine/core';

import BLOG from '../Components/Blog';

const HomeScreen = () => {
  const [blogs, setBlogs] = useState([
    {
      key: 1,
      title: 'Toad',
      image: 'default',
      description: 'asda.adasdas/ad/as/das/dasd',
      category: 'Education',
    },
    {
      key: 2,
      title: 'Peach',
      image: 'default',
      description: 'asda.adasdas/ad/as/das/dasd',
      category: 'Education',
    },
    {
      key: 3,
      title: 'Mario',
      image: 'default',
      description: 'asda.adasdas/ad/as/das/dasd',
      category: 'Education',
    },
  ]);

  const fetchBlogs = async () => {
    const { data } = await axios.get('/api/blogs/');

    setBlogs(data);
  };

  useEffect(() => {
    // fetchBlogs();
  }, [fetchBlogs]);
  return (
    <Grid>
      {blogs.map((blog) => (
        <Grid.Col span={4}>
          <BLOG key={blog.key} blog={blog} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default HomeScreen;
