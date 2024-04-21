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
      genres: ["Nu-Metal", "Alternative Metal", "Shoegaze", "Post Metal"],
      origin: "Sacramento, USA",
      members: ["Stephen Carpenter", "Chino Moreno", "Abe Cunningham", "Chi Cheng", "Frank Delgado "],
      status: 'active 😄',
    },
    {
      id: 2,
      name: "Radiohead",
      biography: "Radiohead is an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke (vocals, guitar, piano, keyboards); brothers Jonny Greenwood (lead guitar, keyboards, other instruments) and Colin Greenwood (bass); Ed O'Brien (guitar, backing vocals); and Philip Selway (drums, percussion). They have worked with the producer Nigel Godrich and the cover artist Stanley Donwood since 1994. Radiohead's experimental approach is credited with advancing the sound of alternative rock.",
      artists_imgs: [radiohead1, radiohead2],
      genres: ["Alt Rock", "Experimental Rock", "Pop Rock"],
      origin: "Abingdon, UK",
      members: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"],
      status: 'separated 😐',
    },
    {
      id: 3,
      name: "Radiohead",
      biography: "Radiohead is an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke (vocals, guitar, piano, keyboards); brothers Jonny Greenwood (lead guitar, keyboards, other instruments) and Colin Greenwood (bass); Ed O'Brien (guitar, backing vocals); and Philip Selway (drums, percussion). They have worked with the producer Nigel Godrich and the cover artist Stanley Donwood since 1994. Radiohead's experimental approach is credited with advancing the sound of alternative rock.",
      artists_imgs: [radiohead2],
      genres: ["Alt Rock", "Experimental Rock", "Pop Rock"],
      origin: "Abingdon, UK",
      members: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"],
      status: 'separated 😐',
    },
    {
      id: 4,
      name: "Kendrick Lamar",
      biography: "Kendrick Lamar Duckworth (born June 17, 1987), professionally known as Kendrick Lamar, is a rapper from Compton, California. He is also a member of the hip-hop supergroup Black Hippy collective along with members Jay Rock, Ab-Soul, and Schoolboy Q. His music is largely influenced by the works of 2Pac, Jay-Z, Nas, DMX, The Notorious B.I.G., Mos Def, Eazy-E and Eminem.",
      artists_imgs: [kdot],
      genres: ["Hip Hop", "Conscious Rap"],
      origin: "Compton, USA",
      members: ["Singer-songwriter"],
      status: 'active 😄'
    },
  ];

  const epochs = [
    {
      era: "Prehistoria y Música Antigua",
      content: [
        {
          name: "Música Primitiva",
          desc: "En las culturas prehistóricas, la música inicialmente se centraba en sonidos producidos por la voz humana y objetos naturales como palos y piedras."
        },
        {
          name: "Instrumentos Primitivos",
          desc: "Con el tiempo, se desarrollaron instrumentos más avanzados, como tambores y flautas hechas de hueso y madera."
        }
      ]
    },
    {
      era: "Música en la Antigüedad",
      content: [
        {
          name: "Culturas Antiguas",
          desc: "Las civilizaciones antiguas en Egipto, Mesopotamia, Grecia y Roma tenían formas elaboradas de música, a menudo vinculadas a rituales religiosos y eventos sociales."
        },
        {
          name: "Sistema de Notación",
          desc: "Los griegos desarrollaron un sistema de notación musical que influyó en las tradiciones musicales posteriores."
        }
      ]
    },
    {
      era: "Música en la Edad Media",
      content: [
        {
          name: "Música Litúrgica",
          desc: "La música estaba estrechamente ligada a la Iglesia, y la música litúrgica gregoriana era prominente."
        },
        {
          name: "Polifonía",
          desc: "Surgió la polifonía, la combinación de varias líneas melódicas simultáneas, en la música vocal."
        }
      ]
    },
    {
      era: "Renacimiento",
      content: [
        {
          name: "Renacimiento Musical",
          desc: "Se produjo un resurgimiento del interés en la música antigua y una evolución hacia formas más estructuradas."
        },
        {
          name: "Invención de la Imprenta Musical",
          desc: "La invención de la imprenta musical permitió una distribución más amplia de partituras."
        }
      ]
    },
    {
      era: "Barroco",
      content: [
        {
          name: "Música Barroca",
          desc: "Caracterizada por la ornamentación, la armonía expresiva y el contraste emocional."
        },
        {
          name: "Ópera",
          desc: "Surgió la ópera en Italia como una forma de drama musical."
        }
      ]
    },
    {
      era: "Clasicismo",
      content: [
        {
          name: "Música Clásica",
          desc: "Caracterizada por la claridad, la forma equilibrada y la expresión controlada."
        },
        {
          name: "Compositores Notables",
          desc: "Mozart, Haydn, Beethoven."
        }
      ]
    },
    {
      era: "Romanticismo",
      content: [
        {
          name: "Énfasis en la Emoción",
          desc: "La música romántica se centró en la expresión emocional, la individualidad del compositor y la experimentación tonal."
        },
        {
          name: "Compositores Notables",
          desc: "Beethoven, Chopin, Wagner."
        }
      ]
    },
    {
      era: "Siglo XX",
      content: [
        {
          name: "Explosión de Estilos",
          desc: "El siglo XX vio una explosión de estilos musicales, desde el jazz y el blues hasta la música electrónica y el rock."
        },
        {
          name: "Música Popular",
          desc: "El surgimiento de la música popular y la cultura de masas."
        }
      ]
    },
    {
      era: "Actualidad",
      content: [
        {
          name: "Diversidad Musical",
          desc: "La música contemporánea es increíblemente diversa, abarcando una amplia gama de géneros y estilos."
        },
        {
          name: "Digitalización y Globalización",
          desc: "La tecnología digital y la globalización han transformado la forma en que se crea, distribuye y consume la música."
        }
      ]
    },
  ]

  return (
    <ArtistContext.Provider
      value={{
        artists, epochs
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
