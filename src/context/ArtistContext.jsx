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
      biography: "Deftones is an American alternative metal band from Sacramento, California, formed in 1988, consisting of Chino Moreno (lead vocals and guitar), Stephen Carpenter (guitar), Frank Delgado (keyboards and turntables), and Abe Cunningham (drums and percussion). Vega (formerly of Quicksand) took on bass duties from mid-2009 to ca. 2021 in substitution for Chi Cheng, who was seriously injured in an automobile accident in Santa Clara, California on November 4, 2008. Cheng remained in a coma until his death on April 13, 2013, due to cardiac arrest. Fred Sablan is their current live bassist starting in 2022. Lance Jackman plays guitar during non-US shows since Stephen Carpenter no longer travels abroad as of 2022.",
      artists_imgs: [deftones],
      genre: "Metal",
      origin: "Sacramento, USA",
      members: ["Stephen Carpenter", "Chino Moreno", "Abe Cunningham", "Chi Cheng", "Frank Delgado "],
    },
    {
      id: 2,
      name: "Radiohead",
      biography: "Radiohead is an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke (vocals, guitar, piano, keyboards); brothers Jonny Greenwood (lead guitar, keyboards, other instruments) and Colin Greenwood (bass); Ed O'Brien (guitar, backing vocals); and Philip Selway (drums, percussion). They have worked with the producer Nigel Godrich and the cover artist Stanley Donwood since 1994. Radiohead's experimental approach is credited with advancing the sound of alternative rock.",
      artists_imgs: [radiohead1],
      genre: "Rock",
      origin: "Abingdon, UK",
      members: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"],
    },
    {
      id: 3,
      name: "Radiohead",
      biography: "Radiohead is an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke (vocals, guitar, piano, keyboards); brothers Jonny Greenwood (lead guitar, keyboards, other instruments) and Colin Greenwood (bass); Ed O'Brien (guitar, backing vocals); and Philip Selway (drums, percussion). They have worked with the producer Nigel Godrich and the cover artist Stanley Donwood since 1994. Radiohead's experimental approach is credited with advancing the sound of alternative rock.",
      artists_imgs: [radiohead2],
      genre: "Rock",
      origin: "Abingdon, UK",
      members: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"],
    },
    {
      id: 4,
      name: "Kendrick Lamar",
      biography: "Kendrick Lamar Duckworth (born June 17, 1987), professionally known as Kendrick Lamar, is a rapper from Compton, California. He is also a member of the hip-hop supergroup Black Hippy collective along with members Jay Rock, Ab-Soul, and Schoolboy Q. His music is largely influenced by the works of 2Pac, Jay-Z, Nas, DMX, The Notorious B.I.G., Mos Def, Eazy-E and Eminem.",
      artists_imgs: [kdot],
      genre: "Hip Hop",
      origin: "Compton, USA",
      members: ["Sing-songwirter"],
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
