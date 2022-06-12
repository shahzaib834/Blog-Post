import img from '../logo.png';
import { Image, Text } from '@mantine/core';

import React from 'react';

function Header() {
  return (
    <div className='navbar'>
      <div style={{ width: 240 }}>
        <Image src={img} />
      </div>

      <div
        style={{
          display: 'flex',
          padding: '5px',
          width: '80%',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex' }}>
          <Text>Blogs</Text>
          <Text style={{ marginLeft: '30%' }}>Authors</Text>
        </div>

        <div style={{ display: 'flex' }}>
          <Text style={{ marginRight: '30%' }}>Login</Text>
          <Text>Signup</Text>
        </div>
      </div>
    </div>
  );
}

export default Header;
