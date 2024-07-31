import React, { useContext } from 'react';
import { ContextProvider } from '../../../context/Context';

const History = ({ trans }) => {
  return (
    <div>
      <div className='mt-5'>
        <div className=' mb-3'>
          <div className='card bg-[#e0e1dd] text-primary-content w-96'>
            <div className='card-body'>
              <h2 className='card-title'>{trans}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
