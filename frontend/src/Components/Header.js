import img from '../logo.png';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

import React from 'react';

function Header() {
  return (
    <>
      <div className='header'>
        <Image src={img} boxSize='210px' />
      </div>
      <Breadcrumb
        spacing='8px'
        separator={<ChevronRightIcon color='gray.500' />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/' isCurrentPage>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/authors'>Authors</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/login'>Login</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/signup'>Sign Up</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default Header;
