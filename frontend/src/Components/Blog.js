import React from 'react';
import img from '../blogDefaultImage.jpg';
import { Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChatIcon, StarIcon } from '@chakra-ui/icons';

const Blog = ({ blog }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Link to={`/api/blogs/${blog.key}`}>
        <Image src={img} htmlHeight={225} htmlWidth={500} objectFit='cover' />
      </Link>

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='bold'
          as='h3'
          lineHeight='tight'
          noOfLines={1}
          textTransform='uppercase'
        >
          {blog.title}
        </Box>

        <Box mt='1' as='p' lineHeight='tight'>
          {blog.description}
        </Box>
      </Box>

      <Box display='flex'>
        <Box mt='1' as='h4' lineHeight='tight' noOfLines={1}>
          Category:{' '}
        </Box>
        <Box as='p' mt='1' ml='10' fontSize='sm'>
          {blog.category}
        </Box>
      </Box>

      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center'>
          <StarIcon mr='5' />
          {455}
        </Box>

        <Box display='flex' alignItems='center'>
          <ChatIcon mr='5' />
          {blog.commentsCount}
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
