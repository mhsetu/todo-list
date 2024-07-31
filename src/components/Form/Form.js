import React, { useContext } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { ContextProvider } from '../../context/Context';
import History from '../Completed/History/History';

const Form = () => {
  const { save, setSave, transfer } = useContext(ContextProvider);
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
          />
        </label>
      </form>
      <div>
        {transfer.length > 0 ? <h2 className='mt-12 text-xl'>History</h2> : ''}
        {transfer.map((trans, index) => (
          <History key={index} trans={trans}></History>
        ))}
      </div>
    </div>
  );
};

export default Form;
