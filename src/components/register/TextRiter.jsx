import React from 'react';
import {ReactTyped} from 'react-typed';

const TextWriter = () => {
  return (
    <div className='flex items-center text-xl md:text-4xl space-x-1'>
      <h1 className='font-bold text-[20px]'>Hello, I'm a</h1>
      <ReactTyped
        className='text-red-700 font-bold text-[20px]'
        strings={["Backend Developer", "Frontend Developer","Fullstack Developer","React Native Developer"]}
        typeSpeed={50}
        backSpeed={100}
        loop={true}
      />
    </div>
  );
};

export default TextWriter;
