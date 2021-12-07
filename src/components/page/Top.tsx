import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Top: FC = () => {
  return (
    <>
      <Helmet>
        <title>Top | React App</title>
      </Helmet>
      <h1>TOP</h1>
      <Link to="/about">About</Link>
    </>
  );
};

export default Top;
