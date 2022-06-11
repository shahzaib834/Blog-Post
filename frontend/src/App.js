import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';

import BlogScreen from './Screens/BlogScreen';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route index element={<HomeScreen />} />
            <Route path='/blog' element={<BlogScreen />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
};

export default App;
