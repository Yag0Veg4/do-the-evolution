"use client"

import React, { useState } from "react";
import Dnd from '../dragndrop/DnD'
import FilesViewer from "../viewers/FilesViewer";
import { IconX } from '@tabler/icons-react';
import Image from 'next/image'

const NewAlbum = ({params}) => {
  {/*ALBUM STATES*/}
  const [albums, setAlbums] = useState([])
  const [albumName, setAlbumName] = useState([])
  const [albumDuration, setAlbumDuration] = useState('');
  const [albumGenres, setAlbumGenres] = useState('');
  const [imgAlbum, setImgAlbum] = useState([]);
  {/*SONGS STATES*/}
  const [songs, setSongs] = useState([])
  const [songInput, setSongInput] = useState([])
  const [songTime, setSongTime] = useState([])
  const [songTimeInput, setSongTimeInput] = useState([])

  {/*SONGS HANDLERS*/}
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (songInput.trim() !== '' && songTimeInput.trim() !== '') {
      setSongs([...songs, songInput]);
      setSongTime([...songTime, songTimeInput]);
      setSongInput('');
      setSongTimeInput('');
      console.log(songs);
    }
  }
  
  {/*ALBUMS HANDLERS*/}
  const handleAlbumName = (e) => setAlbumName(e.target.value);
  const handleAlbumDuration = (e) => setAlbumDuration(e.target.value);
  const handleAlbumGenres = (e) => setAlbumGenres(e.target.value);


  const handleDeleteAlbum = (index) => {
    const updatedAlbums = [...albums];
    updatedAlbums.splice(index, 1);
    setAlbums(updatedAlbums);
  };

  const handleSaveAlbum = () => {
    if (albumName.trim() !== '' && albumDuration.trim() !== '' && albumGenres.trim() !== '') {
      const newAlbum = {
        name: albumName,
        duration: albumDuration,
        genres: albumGenres,
        cover: URL.createObjectURL(imgAlbum[0]),
        songs: songs
      };

      setAlbums([...albums, newAlbum]);
      setAlbumName('');
      setAlbumDuration('');
      setAlbumGenres('');
      setImgAlbum([]);
      setSongs([])
      setSongTime([])
    }
    console.log(albums);
  };

  return (
    <div className="grid">
      <input
        className="border-b p-1 bg-transparent"
        placeholder="Nombre del álbum"
        value={albumName}
        onChange={handleAlbumName}
      />
      <input
        className="border-b p-1 bg-transparent"
        placeholder="Duración"
        value={albumDuration}
        onChange={handleAlbumDuration}
      />
      <input
        className="border-b p-1 bg-transparent"
        placeholder="Géneros"
        value={albumGenres}
        onChange={handleAlbumGenres}
      />
      <div className="text-center mt-3">
          <label className="w-full text-center p-1">Portada del álbum</label>
          <Dnd
            id="img-album"
            state={imgAlbum}
            setState={setImgAlbum}
          />
          <FilesViewer
            state={imgAlbum}
            setState={setImgAlbum}
          />
      </div>
      <div className="flex flex-col border mx-5">
        <h1 className='m-5'>Agregar canciones del álbum</h1>
        <div className='flex m-2 w-full'>
          <input
            type="text"
            className=" p-1 bg-transparent"
            placeholder="Nombre"
            value={songInput}
            onChange={handlerSong}
          />
          <input
            type="text"
            className="p-1 bg-transparent"
            placeholder="Duración"
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
        <div className="w-full">
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
        </div>
      </div>
      <button 
        className="border m-3 p-2 w-fit flex justify-self-end bg-lime-700 hover:bg-lime-600"
        onClick={handleSaveAlbum}
      >
          Guardar álbum
      </button>
      <div className="grid grid-cols-4 gap-4 mx-5">
        {albums.map((album, index) => (
            <div key={index} className="flex justify-between items-center mb-2 flex-col">
              <div className="border p-5">
                {album.cover.length > 0 && (
                  <Image
                    src={album.cover}
                    alt="Portada del álbum"
                    className="mb-3"
                    width="200"
                    height="200"
                  />
                )}
                <p className="text-center">{album.name}</p>
                <p>{album.duration}</p>
                <p>{album.genres}</p>
                <p>Canciones: {album.songs.length}</p>
              </div>
              <button
                className="border p-1 text-red-600 w-fit h-fit hover:bg-red-700 hover:text-white my-3"
                onClick={() => handleDeleteAlbum(index)}
              >
                <IconX />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewAlbum;