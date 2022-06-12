import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Grid, GridItem } from '@chakra-ui/react';

import BLOG from '../Components/Blog';

const HomeScreen = () => {
  const [blogs, setBlogs] = useState([
    {
      key: 1,
      title: 'Toad',
      image: 'default',
      description: 'asda.adasdas/ad/as/das/dasd',
      category: 'Education',
      commentsCount: '5',
    },
    {
      key: 2,
      title: 'Peach',
      image: 'default',
      description: 'asda.adasdas/ad/as/das/dasd',
      category: 'Education',
      commentsCount: '50',
    },
    {
      key: 3,
      title: 'Mario',
      image: 'default',
      description: 'asda.adasdas/ad/as/das/dasd',
      category: 'Education',
      commentsCount: '15665456',
    },
    {
      key: 4,
      title: 'Luigi',
      image: 'default',
      description: 'asda.adasdas/ad/as/das/dasd',
      category: 'Haunted',
      commentsCount: '456',
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
    <Grid templateColumns='repeat(6, 1fr)' gap={25}>
      {blogs.map((blog) => (
        <GridItem colSpan={3}>
          <BLOG key={blog.key} blog={blog} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default HomeScreen;
