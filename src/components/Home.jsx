import React, { useEffect } from 'react';
import Protofolio from './register/Protofolio';
import Expirence from './register/Expirence';
import Projects from './register/Projects';
import ExtraAchievement from './register/ExtraAchievement';


function Home() {
  
  window.scrollTo(0, 0);
 
  return (
    <>
      <Protofolio />
      <Expirence/>
      <Projects/>
      <ExtraAchievement/>
    </>
  );
}

export default Home;
