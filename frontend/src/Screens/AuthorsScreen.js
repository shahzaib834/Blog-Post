import React from 'react';
import img from '../blogDefaultImage.jpg';
import { Image, Box, Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AuthorsScreen = () => {
  const authors = [
    {
      key: 1,
      title: 'Mario',
      image: 'default',
      email: 'example@example.com',
      followersCount: '15665456',
      followingCount: '54654',
      blogsCount: '546',
    },
    {
      key: 2,
      title: 'Peach',
      image: 'default',
      email: 'example@example.com',
      followersCount: '2',
      followingCount: '54',
      blogsCount: '5',
    },
    {
      key: 3,
      title: 'Peach',
      image: 'default',
      email: 'example@example.com',
      followersCount: '2',
      followingCount: '54',
      blogsCount: '5',
    },
    {
      key: 4,
      title: 'Peach',
      image: 'default',
      email: 'example@example.com',
      followersCount: '2',
      followingCount: '54',
      blogsCount: '5',
    },
    {
      key: 5,
      title: 'Peach',
      image: 'default',
      email: 'example@example.com',
      followersCount: '2',
      followingCount: '54',
      blogsCount: '5',
    },
    {
      key: 6,
      title: 'Peach',
      image: 'default',
      email: 'example@example.com',
      followersCount: '2',
      followingCount: '54',
      blogsCount: '5',
    },
    {
      key: 7,
      title: 'Peach',
      image: 'default',
      email: 'example@example.com',
      followersCount: '2',
      followingCount: '54',
      blogsCount: '5',
    },
  ];
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={12}>
      {authors.map((author) => (
        <GridItem>
          <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Link to={`/api/authors/${author.key}`}>
              <Image
                src={img}
                borderRadius='100%'
                boxSize='150px'
                objectFit='cover'
              />
            </Link>

            <Box p='6'>
              <Box
                mt='1'
                fontWeight='bold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                textTransform='uppercase'
              >
                {author.title}
              </Box>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default AuthorsScreen;
