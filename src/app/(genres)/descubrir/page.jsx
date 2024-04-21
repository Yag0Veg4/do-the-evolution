"use client";

import { useArtists } from "@/context/ArtistContext";
import ArtistCard from "@/components/ArtistCard";
import Categories from "@/components/Categories";

export default function Discover() {
  const { artists } = useArtists();

  return (
    <>
      <Categories />
      <div className="m-10">
        <h1 className="text-4xl my-3">Descubrir</h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae
          voluptas maiores corrupti eligendi expedita harum odit accusantium
          maxime ea incidunt, error modi qui, eum ipsa illo. Iste modi, non,
          totam pariatur laborum aspernatur expedita laudantium a fugiat dolor
          ea laboriosam delectus corrupti vel nostrum maxime sit quidem
          voluptates aperiam. Porro omnis obcaecati molestias, accusamus velit
          quae, nihil enim rem voluptate dolorem dignissimos modi. Neque
          asperiores quidem ut maxime quas dicta vero in libero recusandae
          inventore sint adipisci voluptatem nisi eligendi ea, consequatur a
          labore commodi vitae illo. Eos nisi optio earum minus qui harum
          explicabo maiores autem libero asperiores!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 flex-wrap">
          {artists.map((artist) => (
            <ArtistCard artist={artist} key={artist.id}/>
          ))}
        </div>
      </div>
    </>
  );
}
