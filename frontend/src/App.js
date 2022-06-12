import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from '@mantine/core';
import Header from './Components/Header';

import BlogScreen from './Screens/BlogScreen';
import HomeScreen from './Screens/HomeScreen';
import AuthorsScreen from './Screens/AuthorsScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path='/blogs' element={<BlogScreen />} />
          <Route path='/authors' element={<AuthorsScreen />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
