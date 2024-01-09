"use client"

import React, { useState } from 'react';
import { IconX, IconTrashX } from '@tabler/icons-react'

export default function NewGenre() {
  const [genreInput, setGenreInput] = useState('');
  const [genres, setGenres] = useState([]);

  const handleChange = (e) => {
    setGenreInput(e.target.value);
  };
  
  const handleDelete = (e, index, setGenres) => {
    e.preventDefault();

    const tmp = [...genres];
    tmp.splice(index, 1);
    setGenres(tmp);
  }
  
  const handleDeleteAll = (e) => {
    e.preventDefault();
    
    setGenres([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (genreInput.trim() !== '') {
      setGenres([...genres, genreInput]);
      setGenreInput('');
    }
  };

  return (
    <div>
      <div className='flex w-full justify-between'>
        <input
          name='genre'
          type='text'
          className='flex p-1 my-2 bg-transparent'
          placeholder='Agrega un género'
          value={genreInput}
          onChange={handleChange}
        />
        <button
          className='w-fit border p-2 m-2 flex text-center bg-lime-700 hover:bg-lime-600'
          onClick={handleSubmit}
        >
          Agregar género
        </button>
      </div>

      <div className='w-full'>
        {genres.map((genre, index) => (
          <div className='flex w-full justify-between'>
            <p key={index} className='text-start ml-3'>{genre}</p>
            <div className='flex justify-end items-center mb-2'>
                <button 
                className='border p-1 text-red-600 w-fit h-fit hover:bg-red-700 hover:text-white mr-3'
                onClick={(event, index) => { handleDelete(event, index, setGenres) }}><IconX /></button>
            </div>
            
          </div>
        ))}
        {
          genres.length === 0
          ? <></>
          : <button className='border p-2 flex gap-2 m-auto my-3 text-red-600 hover:bg-red-700 hover:text-white' onClick={handleDeleteAll}>Borrar todo <IconTrashX /></button>
        }
      </div>
    </div>
  );
}