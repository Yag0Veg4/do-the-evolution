"use client"

import React, { useState } from 'react';
import { IconX, IconTrashX } from '@tabler/icons-react';

const NewMember = () => {
  const [members, setMembers] = useState([]);
  const [memberInput, setMemberInput] = useState('');
  const [instruments, setInstruments] = useState([]);
  const [instrumentInput, setInstrumentInput] = useState('');

  const handleMembers = (e) => setMemberInput(e.target.value);
  const handleInstrument = (e) => setInstrumentInput(e.target.value);

  const handleDelete = (index) => {
    const updatedMembers = [...members];
    const updatedInstruments = [...instruments];

    updatedMembers.splice(index, 1);
    updatedInstruments.splice(index, 1);

    setMembers(updatedMembers);
    setInstruments(updatedInstruments);
  };

  const handleDeleteAll = (e) => {
    e.preventDefault();
    
    setMembers([]);
    setInstruments([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (memberInput.trim() !== '' && instrumentInput.trim() !== '') {
      setMembers([...members, memberInput]);
      setInstruments([...instruments, instrumentInput]);
      setMemberInput('');
      setInstrumentInput('');
    }
  };

  return (
    <div className='grid'>
      <div className="flex items-center">
        <input 
          type="text" 
          name="member-name"
          className='bg-transparent p-1 h-fit' 
          placeholder='Nombre'
          value={memberInput}
          onChange={handleMembers}
        />
        <input 
          type="text" 
          name="member-i"
          className='bg-transparent p-1 h-fit' 
          placeholder='¿Qué toca?'
          value={instrumentInput}
          onChange={handleInstrument}
        />
        <button 
          className='border m-4 p-2 w-fit flex justify-self-end bg-lime-700 hover:bg-lime-600'
          onClick={handleSubmit}
        >
          Agregar integrante
        </button>
      </div>
      {members.map((member, index) => (
        <div key={index} className='flex justify-between items-center mb-2'>
          <p className='ml-3'>{member} - {instruments[index]}</p>
          <button 
            className='border p-1 text-red-600 w-fit h-fit hover:bg-red-700 hover:text-white mr-3'
            onClick={() => handleDelete(index)}
          >
            <IconX />
          </button>
        </div>
      ))}
      {
        members.length === 0
        ? <></>
        : <button className='border p-2 flex gap-2 m-auto my-3 text-red-600 hover:bg-red-700 hover:text-white' onClick={handleDeleteAll}>Borrar todo <IconTrashX /></button>
      }
    </div>
  );
}

export default NewMember;
