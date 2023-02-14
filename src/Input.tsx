import React from 'react';

interface InputProps {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ label }: InputProps) => {
  return (
    <div className='flex justify-center'>
      <div className='form-floating mb-3 xl:w-96'>
        <input
          type='email'
          className='form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='floatingInput'
          placeholder='name@example.com'
        />
        <label className='text-gray-700'>{label}</label>
      </div>
    </div>
  );
};

export default Input;
