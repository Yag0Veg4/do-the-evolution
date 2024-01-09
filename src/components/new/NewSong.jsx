"use client"

import React, { useState } from 'react'
import { IconX, IconTrashX } from '@tabler/icons-react';

const NewSong = () => {
  const [songs, setSongs] = useState([])
  const [songInput, setSongInput] = useState([])
  const [songTime, setSongTime] = useState([])
  const [songTimeInput, setSongTimeInput] = useState([])

  const handlerSong = (e) => setSongInput(e.target.value)
  const handlerSongTime = (e) => setSongTimeInput(e.target.value)

  const handleDelete = (index) => {
    const updatedSongs = [...songs]
    const updatedSongsTime = [...songTime]

    updatedSongs.splice(index, 1)
    updatedSongsTime.splice(index, 1)

    setSongs(updatedSongs)
    setSongTime(updatedSongsTime)
  }

  const handleDeleteAll = (e) => {
    e.preventDefault()

    setSongs([])
    setSongTime([])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (songInput.trim() !== '' && songTimeInput.trim() !== '') {
      setSongs([...songs, songInput]);
      setSongTime([...songTime, songTimeInput]);
      setSongInput('');
      setSongTimeInput('');
    }
  }

  return (
    <>
      <div className="flex flex-col border mx-5">
        <h1 className='m-5'>Agregar canciones del álbum</h1>
        <div className='flex m-2'>
          <input
            type="text"
            className=" p-1 bg-transparent"
            placeholder="Nombre"
            required
            value={songInput}
            onChange={handlerSong}
          />
          <input
            type="text"
            className="p-1 bg-transparent"
            placeholder="Duración"
            required
            value={songTimeInput}
            onChange={handlerSongTime}
          />
          <button 
            className="border text-sm p-1 mx-3 flex justify-end items-center bg-lime-700 hover:bg-lime-600"
            onClick={handleSubmit}
          >
            Agregar canción
          </button>
        </div>
        {songs.map((song, index) => (
          <div key={index} className='flex justify-between items-center mb-2'>
          <p className='ml-3'>{index + 1}. {song} - {songTime[index]}</p>
          <button 
            className='border p-1 text-red-600 w-fit h-fit hover:bg-red-700 hover:text-white mr-3'
            onClick={() => handleDelete(index)}
          >
            <IconX />
          </button>
        </div>
        ))}
        {
          songs.length === 0
          ? <></>
          : <button className='border p-2 flex gap-2 m-auto my-3 text-red-600 hover:bg-red-700 hover:text-white' onClick={handleDeleteAll}>Borrar todo <IconTrashX /></button>
        } 
      </div>
    </>
  )
}

export default NewSong
