import React, { useContext, useState } from 'react';
import { iconComplete, iconDelete, iconEdit } from '../Icons/Icons';
import { ContextProvider } from '../../context/Context';
import { FaCirclePlus } from 'react-icons/fa6';

const Todo = ({ task, id,transfer,setTransfer ,save, setSave }) => {
  

  const [edit, setEdit] = useState(false);
  const handleDelete = (taskID) => {
    console.log(taskID);
    const remove = save.find((s, index) => index === taskID);
    const filterTask = save.filter((f) => f !== remove);
    console.log(filterTask);
    console.log(remove);
    setSave(filterTask);
    // const newTransfer = [...transfer, remove];
    // setTransfer(newTransfer);
    // console.log(newTransfer);
  };

  const handleComplete = (taskID) => {
    console.log(taskID);
    const remove = save.find((s, index) => index === taskID);
    const filterTask = save.filter((f) => f !== remove);
    console.log(filterTask);
    console.log(remove);
    setSave(filterTask);
    const newTransfer = [...transfer, remove];
    setTransfer(newTransfer);
    console.log(newTransfer);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(id);
    const todo = event.target.todo.value;
    console.log(todo);
    const remove = save.find((s, index) => index === id);
    console.log(remove);
    const filterTask = save.filter((f) => f !== remove);
    const newSave = [...filterTask, todo];
    setSave(newSave);
    setEdit(!edit);
    // console.log(save);
    console.log(newSave);
  };

  return (
    <div>
      {edit ? (
        <div className='flex gap-3 items-center'>
          <button
            onClick={() => setEdit(!edit)}
            className='btn btn-circle btn-outline'
          >
            {iconEdit}
          </button>
          <form onSubmit={(id) => handleUpdate(id)}>
            <label className='input input-bordered input-lg flex items-center gap-2'>
              <button type='submit'>
                <FaCirclePlus color='#f6bd60' size='30px' />
              </button>
              <input
                type='text'
                name='todo'
                className='grow'
                placeholder='New Todo'
                defaultValue={task}
              />
            </label>
          </form>
        </div>
      ) : (
        <div className='flex gap-2 items-center mb-3'>
          <button
            onClick={() => handleDelete(id)}
            className='btn btn-circle btn-outline'
          >
            {iconDelete}
          </button>
          <div className='card bg-[#ffcb77] text-primary-content w-96'>
            <div className='card-body'>
              <h2 className='card-title text-black'>{task}</h2>
            </div>
          </div>
          <button
            onClick={() => handleComplete(id)}
            className='btn btn-circle btn-outline'
          >
            {iconComplete}
          </button>
          <button
            onClick={() => setEdit(!edit)}
            className='btn btn-circle btn-outline'
          >
            {iconEdit}
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
