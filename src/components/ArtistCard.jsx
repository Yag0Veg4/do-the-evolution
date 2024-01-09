import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ArtistCard = ({artist}) => {
  const router = useRouter()

  function truncateBiography(biography, wordLimit) {
    const words = biography.split(' ');
  
    if (words.length > wordLimit) {
      const truncatedWords = words.slice(0, wordLimit);
      return truncatedWords.join(' ') + '...';
      
    } else {
      return biography;
    }
  }  

  return (
    <div className="border pt-4 px-4">
        <h3 className="text-xl ">{artist.name}</h3>
        <p className="my-4 h-24">{truncateBiography(artist.biography, 20)}</p>
        <div className="flex justify-center">
            <Image 
            src={artist.artists_imgs[0]}
            width={200}
            height={200}
            alt='Artist Image'
            className='w-52 h-52 object-cover'
            />
        </div>
        <div className="w-full flex justify-center">
          <button 
            className='border m-3 p-2 w-fit flex justify-self-end bg-lime-700 hover:bg-lime-600'
            onClick={() => router.push(`/artist/${artist.id}`)}
            title='Ver info del artista'
          >
            Ver Artista
          </button>
        </div>
    </div>
  )
}

export default ArtistCard
