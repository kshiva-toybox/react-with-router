import axios from 'axios';
import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const RequestTest: FC = () => {
  console.log('hoge');

  useEffect(() => {
    const request = async () => {
      axios.get('http://hogehogepiyopiyo.xyz');
    };

    request();
  }, []);

  return (
    <>
      <Helmet>
        <title>RequestTest | React App</title>
      </Helmet>
      <h1>RequestTest</h1>
      <Link to="/">Top</Link>
    </>
  );
};

export default RequestTest;
