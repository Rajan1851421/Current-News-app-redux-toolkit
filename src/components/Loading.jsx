import React from 'react';
import Lottie from "lottie-react";
import load from '/src/image/Animation - 1703499456614'

export default function App() {
  const style = {
    height: "80px"
  }

  return (
    <>
      <div className='h-screen'>
        <Lottie style={style} animationData={load} loop={true} />
      </div>


    </>
  );
}