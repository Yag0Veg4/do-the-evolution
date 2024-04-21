"use client"

import { useArtists } from '@/context/ArtistContext';
import { useEffect, useState } from 'react';
import Image from 'next/image'

const ArtistDetailsPage = ({params}) => {
  const { artists } = useArtists();
  const [artist, setArtist] = useState('')

  useEffect(() => {
    if (params.id) {
      const foundArtist = artists.find((artist) => artist.id === parseInt(params.id))
      if (foundArtist) {
        setArtist(foundArtist)
      }
    }
  }, [params.id, artists])

  return (
    <div>
      {/* <div className='flex'>
        {artist.genres.map((genre, index) => (
         <p key={index}>{genre}</p> 
        ))}
      </div> */}
      <div>
        <p className='border border-lime-500 rounded-xl p-2 my-2 ml-2 text-xs text-lime-500 hover:bg-lime-500 transition-all'>{artist.genres}</p>
      </div>
      <h1 className='text-8xl'>{artist.name}</h1>
      <p>{artist.biography}</p>
      <p>{artist.origin}</p>
      <p>{artist.members}</p>
      <div className='flex'>
          <Image 
            width={200}
            height={200}
            src={artist.artists_imgs}
            className='h-52 object-cover'
          />
      </div>
    </div>
  );
};

export default ArtistDetailsPage;
