"use client"

import NewMember from '@/components/new/NewMember'
import NewAlbum from '@/components/new/NewAlbum'
import Categories from '@/components/Categories'
import { dot } from '../fonts'
import { useState } from 'react'
import Dnd from '@/components/dragndrop/DnD'
import FilesViewer from '@/components/viewers/FilesViewer'
import NewGenre from '@/components/new/NewGenre'
import { useRouter } from 'next/navigation'

function Artist({ params }) {
  const router = useRouter()

  const [artist, setArtist] = useState([])
  const [imgsArtistas, setImgsArtistas] = useState([]);
  const [imgBackground, setImgBackground] = useState([]);

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()


  }

  const [] = useState([]);

  return (
    <div className='bg-zinc-900 text-white'>
      <Categories />
      <div className={dot.className}><h1 className='mx-40 my-10 text-3xl'>Agregar nuevo artista</h1></div>
      <form className='flex flex-col mx-40 mb-10 bg-transparent' onSubmit={handleSubmit}>
        <div className='border flex flex-col '>
          <div className='border-b p-6 text-xl'><label className={dot.className}>Artista</label></div>
          <input type="text" id="" className='bg-transparent border-b p-1' placeholder='Nombre del artista'/>
          <textarea id="" cols="10" rows="2" className='bg-transparent border-b p-1' placeholder='Biografía'></textarea>
          <label className='text-center pt-3'>Imágenes del artista</label>
          <div 
            className="w-full text-center flex flex-col border-b"
          >
            <Dnd 
              id='dnd-artistas'
              state={imgsArtistas}
              setState={setImgsArtistas}
            />
            <FilesViewer
              state={imgsArtistas}
              setState={setImgsArtistas}
            />
          </div>
          <label className='text-center pt-3'>Imágen para banner</label>
          <div className="text-center flex flex-col">
            <Dnd 
              id='img-banner'
              state={imgBackground}
              setState={setImgBackground}
            />
            <FilesViewer
              state={imgBackground}
              setState={setImgBackground}
            />
            <div className='border-t p-1 '>
              <div><h1 className='w-full my-3'>Géneros</h1></div>
              <NewGenre />
            </div>
          </div>
        </div>
        <div className='border my-10'>
          <div className='border-b p-6 text-xl'><label className={dot.className}>Integrantes</label></div>
          <NewMember />
        </div>
        <div className='border flex flex-col'>
          <div className=' border-b p-6 text-xl'><p className={dot.className}>Álbumes</p></div>
          <NewAlbum />
        </div>
        <div>
          <button type="submit" className='border my-4 p-2 w-fit flex bg-lime-700 hover:bg-lime-600'>Añadir artista</button>
        </div>
      </form>
    </div>
  )
}

export default Artist
