import React, { useContext, useState } from 'react';

import Form from '../Form/Form';
import Todo from '../Todo/Todo';
import { ContextProvider } from '../../context/Context';

const Home = () => {
  const [transfer, setTransfer] = useState([]);
  const [save, setSave] = useState([]);

  return (
    <div>
      <div className='my-16'>
        <h1 className='text-2xl'>Welcome to Todo-List</h1>
      </div>
      <div className='grid grid-cols-3 justify-items-center'>
        <div className='col-span-2'>
          {save.map((task, index) => (
            <Todo
              key={index}
              id={index}
              save={save}
              setSave={setSave}
              transfer={transfer}
              setTransfer={setTransfer}
              task={task}
            ></Todo>
          ))}
        </div>
        <div className='max-w-sm'>
          <Form
            transfer={transfer}
            setTransfer={setTransfer}
            save={save}
            setSave={setSave}
          ></Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
