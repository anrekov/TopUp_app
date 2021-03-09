import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const operators = ['MTS', 'Beeline', 'Megafon', 'Tele2', 'Custom'];

  return (
    <div className='main'>
      <h1>Main page</h1>

      <h3>Choose operator</h3>
      {operators.map((operator) => (
        <Link key={uuidv4()} to={`/deposit/${operator}`} className='link'>
          <div className='operator'>
            {operator}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Main;
