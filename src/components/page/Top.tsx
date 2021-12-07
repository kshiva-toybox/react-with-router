import { FC } from 'react';
import { Link } from 'react-router-dom';

const Top: FC = () => {
  return (
    <>
      <h1>TOP</h1>
      <Link to="/about">About</Link>
    </>
  );
};

export default Top;
