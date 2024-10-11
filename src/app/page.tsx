
import React from 'react';
import Calculator from './components/calculator'

const Home = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-green-400 text-center text-6xl mt-8 bold'>My Calculator!!</h1>
      <Calculator />
    </div>
  );
}

export default Home;
