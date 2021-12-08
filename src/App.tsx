import { FC } from 'react';
import { Route, Routes } from 'react-router';
import About from './components/page/About';
import RequestTest from './components/page/RequestTest';
import Top from './components/page/Top';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="about" element={<About />} />
      <Route path="request-test" element={<RequestTest />} />
    </Routes>
  );
};

export default App;
