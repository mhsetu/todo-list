import React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

import History from '../Completed/History/History';

const Form = ({ transfer, save, setSave, setTransfer }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const todo = form.todo.value;
    setSave(todo);
    const newTodo = [...save, todo];
    setSave(newTodo);
    form.reset();
    console.log(todo);
    console.log(save);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='input input-bordered flex items-center gap-2'>
          <button type='submit'>
            <FaCirclePlus color='#f6bd60' size='20px' />
          </button>
          <input
            type='text'
            name='todo'
            className='grow'
            placeholder='New Todo'
            required
          />
        </label>
      </form>
      <div>
        {transfer.length > 0 ? <h2 className='mt-12 text-xl'>History</h2> : ''}
        {transfer.map((trans, index) => (
          <History
            key={index}
            id={index}
            trans={trans}
            transfer={transfer}
            setTransfer={setTransfer}
            save={save}
            setSave={setSave}
          ></History>
        ))}
      </div>
    </div>
  );
};

export default Form;
