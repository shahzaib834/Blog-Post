import React from 'react';
import img from '../blogDefaultImage.jpg';
import { Card, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
    <div style={{ marginTop: '15%' }}>
      <Card shadow='sm' p='lg'>
        <Card.Section>
          <Link to={`/api/blogs/${blog.key}`}>
            <Image src={img} height={160} width={350} />
          </Link>
        </Card.Section>

        <Text weight={600}>{blog.title}</Text>

        <Text size='sm' style={{ lineHeight: 1.5 }}>
          {blog.description}
        </Text>

        <Text size='md' style={{ marginTop: '5%' }}>
          Category: {blog.category}
        </Text>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '4%',
          }}
        >
          <Text>Likes</Text>
          <Text>Comments</Text>
        </div>
      </Card>
    </div>
  );
};

export default Blog;
