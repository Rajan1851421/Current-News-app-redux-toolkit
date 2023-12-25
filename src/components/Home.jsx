import React, { useEffect } from 'react';
import Protofolio from './register/Protofolio';
import Expirence from './register/Expirence';
import Reactjs from './register/React';
import ReduxToolkit from './register/ReduxToolkit';



function Home() {

  window.scrollTo(0, 0);

  return (
    <>
      <Protofolio />
      <Expirence />
      <Reactjs />
      <ReduxToolkit />
    </>
  );
}

export default Home;
