import React from 'react';
import Protofolio from './register/Protofolio';
import Expirence from './register/Expirence';

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <Protofolio />
      <Expirence/>
    </>
  );
}

export default Home;
