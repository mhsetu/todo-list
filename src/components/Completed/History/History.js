import React from 'react';

import { iconUndo } from '../../Icons/Icons';

const History = ({ trans }) => {
  const handleUndo = () => {
    // const remove=
  };
  return (
    <div>
      <div className='mt-5'>
        <div className=' mb-3 flex items-center gap-2'>
          <button className='btn btn-circle btn-outline'>{iconUndo}</button>
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
