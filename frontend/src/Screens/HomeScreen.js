import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';

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
    <main className='m'>
      <Row>
        {blogs.map((blog) => (
          <Col>
            <BLOG key={blog.key} blog={blog} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default HomeScreen;
