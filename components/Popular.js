import React, { useEffect } from 'react';
import axios from 'axios';

const Popular = () => {
  useEffect(() => {
    async () => {
      let data = await axios.get('/api/hello');
      console.log(data);
    };
  }, []);

  return (
    <div>
      <h1>Popular</h1>
    </div>
  );
};

export default Popular;
