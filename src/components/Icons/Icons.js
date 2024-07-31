import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdDelete, MdModeEdit } from 'react-icons/md';

export const iconDelete = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 30 30'
    //   stroke='currentColor'
  >
    <MdDelete color='#2a9d8f' size='30px' />
  </svg>
);

export const iconComplete = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 30 30'
    stroke='currentColor'
  >
    <IoMdCheckmarkCircle color='#50abb0' size='30px' />
  </svg>
);

export const iconEdit = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 30 30'
    stroke='currentColor'
  >
    <MdModeEdit color='#50abb0' size='30px' />
  </svg>
);
