import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BlogScreen from './Screens/BlogScreen';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='/blog' element={<BlogScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
