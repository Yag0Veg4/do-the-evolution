"use client";

import { createContext, useContext, React } from "react";
import {
  deftones,
  radiohead1,
  radiohead2,
  kdot
} from '@/assets/ArtistsImgs'

export const ArtistContext = createContext();

export const useArtists = () => {
  const context = useContext(ArtistContext);
  if (!context) throw new Error("No tiene contexto");

  return context;
};

export const ArtistProvider = ({ children }) => {
  const artists = [
    {
      id: 1,
      name: "Deftones",
      biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum dolores inventore maiores culpa commodi impedit aspernatur repellat! Natus consequuntur ab excepturi unde quo? Magni sit suscipit adipisci similique architecto sunt ullam ipsam veritatis eius porro unde, dolorum reiciendis maiores labore nam ab. Suscipit, quas inventore? Nam cupiditate sunt doloremque.",
      artists_imgs: [deftones]
    },
    {
      id: 2,
      name: "Radiohead",
      biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sint eveniet! Assumenda quo reiciendis rem aliquid porro ullam deleniti praesentium dignissimos quisquam harum molestiae eius maiores, illo nesciunt atque excepturi placeat facilis necessitatibus eveniet molestias accusantium dolorem nobis. Aut harum corrupti dolore similique et animi. Aspernatur possimus optio sequi vero, id ad repellendus tempora, vitae, veniam ipsum iure laborum eligendi? Quos porro beatae magnam minus deserunt mollitia, sequi esse, maxime molestias ut fugiat, sit perspiciatis tenetur expedita at soluta eaque delectus ducimus reprehenderit? Eius illum pariatur omnis aliquam vel repellendus, consequatur quidem? Labore aliquid id veritatis eaque a quaerat reiciendis.",
      artists_imgs: [radiohead1, radiohead2]
    },
    {
      id: 3,
      name: "Kendrick Lamar",
      biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum dolores inventore maiores culpa commodi impedit aspernatur repellat! Natus consequuntur ab excepturi unde quo? Magni sit suscipit adipisci similique architecto sunt ullam ipsam veritatis eius porro unde, dolorum reiciendis maiores labore nam ab. Suscipit, quas inventore? Nam cupiditate sunt doloremque.",
      artists_imgs: [kdot]
    },
    {
      id: 4,
      name: "Kendrick Lamar",
      biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum dolores inventore maiores culpa commodi impedit aspernatur repellat! Natus consequuntur ab excepturi unde quo? Magni sit suscipit adipisci similique architecto sunt ullam ipsam veritatis eius porro unde, dolorum reiciendis maiores labore nam ab. Suscipit, quas inventore? Nam cupiditate sunt doloremque.",
      artists_imgs: [kdot]
    },
  ];

  return (
    <ArtistContext.Provider
      value={{
        artists,
      }}
    >
      
      {children}
    </ArtistContext.Provider>
  );
};
