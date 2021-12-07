import { FC } from 'react';
import { Route, Routes } from 'react-router';
import About from './components/page/About';
import Top from './components/page/Top';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default App;
