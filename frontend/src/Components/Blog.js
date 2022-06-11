import React from 'react';

import { Card } from 'react-bootstrap';

import img from '../blogDefaultImage.jpg';

function Blog({ blog }) {
  return (
    <Card className='p-3 rounded my-3'>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>
          <strong>{blog.title}</strong>
        </Card.Title>
        <Card.Text>{blog.description}</Card.Text>
        <Card.Subtitle>Likes</Card.Subtitle>
        <Card.Subtitle>Comments</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Blog;
