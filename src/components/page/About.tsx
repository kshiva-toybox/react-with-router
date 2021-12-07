import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About | React App</title>
      </Helmet>
      <h1>About</h1>
      <Link to="/">Top</Link>
    </>
  );
};

export default About;
