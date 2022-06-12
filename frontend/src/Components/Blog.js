import React from 'react';
import img from '../blogDefaultImage.jpg';
import { Card, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
    <div style={{ marginTop: '15%' }}>
      <Card shadow='sm' p='lg'>
        <Card.Section>
          <Image src={img} height={160} width={350} />
        </Card.Section>

        <Link to='/blogs'>
          <Text weight={500}>Norway Fjord Adventures</Text>
        </Link>

        <Text size='sm' style={{ lineHeight: 1.5 }}>
          With Fjord Tours
        </Text>
      </Card>
    </div>
  );
};

export default Blog;
