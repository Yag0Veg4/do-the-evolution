"use client"

import React from 'react'
import Categories from '../components/Categories'
import { useArtists } from '@/context/ArtistContext'
import { robo_mono, bebas, dot, righteous } from './fonts'

function HomePage() {
  const { epochs } = useArtists()

  return (
    <div>
        <div className={robo_mono.className}>
          <h1 className="text-4xl lg:text-8xl text-lime-400 uppercase bg-lime-800 p-5">Un "Melómano" más</h1>
        </div>
        <Categories />
        <div className='bg-zinc-900 text-white text-center p-3 lg:p-16'>
          <div className={bebas.className}>
            <h1 className='text-6xl my-6 mx-3 text-left lg:text-8xl lg:mx-24 lg:my-3'>La música</h1>
          </div>
          <div className="mx-1 lg:mx-24 border border-lime-500">
            <div className='lg:px-16 py-10 border border-lime-500'>
              <div className={dot.className}><h3 className='text-3xl text-left pl-8'>¿Qué es la música?</h3></div>
              <p className="m-8 text-sm">Ruido y personas cantando. Yo lo definiría de esa manera, pero no es que sea malo, es hermoso, es de mis formas favoritas del arte, es la forma más breve del arte, la más concisa y una que le gusta a la mayoría de la gente. Lo que hace al ruido ser tan hermoso, años de evolución humana que nos trajeron a este momento, escuchar el sonar que hacen las cuerdas de una guitarra, los golpeteos de la batería, hay combinaciones infinitas de melodías dentro de la música, ritmos desde el más sencillo hasta el más saturado pueden sonar bien, una voz "mala" o una voz "buena" que sin importar mucho eso, lo que pueden llegar a transmitir es lo que lo hace hermoso, claro, hay voces espectaculares y hermosas, pero lo lindo de la música es que cualquiera puede hacerla para decir o transmitir. - <i>Yo</i> </p>
            </div>
            <div className='text-left grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 border lg:border-none border-lime-500'>
              {epochs.map((epoch, i) => (
                <div className='p-4 border-lime-500 border'>
                  <div className={righteous.className} key={i}><h3 className='text-3xl'>{epoch.era}:</h3></div>
                  {epoch.content.map((type, j) => (
                    <p className='text-sm' key={j}><strong>{type.name}:</strong>{type.desc}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage
