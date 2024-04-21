import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconMapPin, IconArrowUpRight } from '@tabler/icons-react'

const ArtistCard = ({ artist }) => {
  const router = useRouter();

  /* function truncateBiography(biography, wordLimit) {
    const words = biography.split(" ");

    if (words.length > wordLimit) {
      const truncatedWords = words.slice(0, wordLimit);
      return truncatedWords.join(" ") + "...";
    } else {
      return biography;
    }
  } */

  const handlerArtist = () => {
    router.push(`/artist/${artist.id}`)
  }

  return (
    <div className="border-lime-500 border mt-4 card">
      <h3 className="text-5xl border-lime-500 border-b pt-8 pb-3 pl-3">{artist.name}</h3>
      <div className="flex border-lime-500 border-b">
        <Image
          src={artist.artists_imgs[0]}
          width={200}
          height={200}
          alt="Artist Image"
          className="w-1/2 h-52 object-cover"
        />
        <div className="grid grid-rows-3 w-1/2">
          <p className="flex justify-center items-center border-lime-500 border-b">Status: {artist.status}</p>
          <p className="border-lime-500 border-b flex justify-center items-center">{artist.origin}<IconMapPin stroke={1.5} 
          className="m-2"/></p>
          <button
            className="flex justify-center items-center text-lg bg-lime-700 hover:bg-lime-600 transition-all"
            onClick={handlerArtist}
            title="Ver info del artista"
          >
            Ver Artista 
            <IconArrowUpRight stroke={1.5}/>
          </button>
        </div>
        
      </div>
      <div className="flex flex-wrap items-center">
        {artist.genres.map((genre, index) => (
          <p key={index} className="border border-lime-500 rounded-xl p-2 my-4 ml-2 text-xs text-lime-500 hover:bg-lime-500 transition-all" >{genre}</p>
        ))}
      </div>
    </div>
  );
};

export default ArtistCard;
