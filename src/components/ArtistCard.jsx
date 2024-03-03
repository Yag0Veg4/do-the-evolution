import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ArtistCard = ({ artist }) => {
  const router = useRouter();

  function truncateBiography(biography, wordLimit) {
    const words = biography.split(" ");

    if (words.length > wordLimit) {
      const truncatedWords = words.slice(0, wordLimit);
      return truncatedWords.join(" ") + "...";
    } else {
      return biography;
    }
  }

  return (
    <div className="border mt-4">
      <h3 className="text-5xl border-b pt-8 pb-3 pl-3">{artist.name}</h3>
      <p className="text-sm py-3 px-3 h-24 border-b">
        {truncateBiography(artist.biography, 20)}
      </p>
      <div className="flex">
        <Image
          src={artist.artists_imgs[0]}
          width={200}
          height={200}
          alt="Artist Image"
          className="w-1/2 h-52 object-cover border-b border-r"
        />
        <div className="grid grid-rows-3 w-1/2">
            <p className="border-b flex justify-center items-center">{artist.genre}</p>
            <p className="border-b flex justify-center items-center">{artist.origin}</p>
            <button
              className="border-b flex justify-center items-center bg-lime-700 hover:bg-lime-600"
              onClick={() => router.push(`/artist/${artist.name}`)}
              title="Ver info del artista"
            >
              Ver Artista
            </button>
        </div>
      </div>
      {/* <div className="w-full justify-center p-10 text-center">
        {artist.members.map((member, memberIndex) => (
          <p className="px-3" key={memberIndex}>{member}</p>
        ))}
      </div> */}
    </div>
  );
};

export default ArtistCard;
