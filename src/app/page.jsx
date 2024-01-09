"use client"

import React from 'react'
import Categories from '../components/Categories'
import { robo_mono, bebas, dot, righteous } from './fonts'

function HomePage() {
  return (
    <div>
        <div className={robo_mono.className}>
          <h1 className="text-8xl text-lime-400 uppercase bg-lime-800 p-5">Un "Melómano" más</h1>
        </div>
        <Categories />
        <div className='bg-zinc-900 text-white text-center p-16'>
          <div className={bebas.className}>
            <h1 className='text-left text-8xl mx-24 my-3'>La música</h1>
          </div>
          <div className=" mx-24 border border-white">
            <div className='mx-16 my-10'>
              <div className={dot.className}><h3 className='text-3xl text-left pl-8'>¿Qué es la música?</h3></div>
              <p className="m-8 text-sm">Ruido y personas cantando. Yo lo definiría de esa manera, pero no es que sea malo, es hermoso, es de mis formas favoritas del arte, es la forma más breve del arte, la más concisa y una que le gusta a la mayoría de la gente. Lo que hace al ruido ser tan hermoso, años de evolución humana que nos trajeron a este momento, escuchar el sonar que hacen las cuerdas de una guitarra, los golpeteos de la batería, hay combinaciones infinitas de melodías dentro de la música, ritmos desde el más sencillo hasta el más saturado pueden sonar bien, una voz "mala" o una voz "buena" que sin importar mucho eso, lo que pueden llegar a transmitir es lo que lo hace hermoso, claro, hay voces espectaculares y hermosas, pero lo lindo de la música es que cualquiera puede hacerla para decir o transmitir. - <i>Yo</i> </p>
            </div>
            <div className='text-left grid grid-cols-3'>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Prehistoria y Música Antigua:</h3></div>
                <p className='text-sm'><strong>Música Primitiva:</strong> En las culturas prehistóricas, la música inicialmente se centraba en sonidos producidos por la voz humana y objetos naturales como palos y piedras.</p>
                <p className='text-sm'><strong>Instrumentos Primitivos:</strong> Con el tiempo, se desarrollaron instrumentos más avanzados, como tambores y flautas hechas de hueso y madera.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Música en la Antigüedad:</h3></div>
                <p className='text-sm'><strong>Culturas Antiguas:</strong> Las civilizaciones antiguas en Egipto, Mesopotamia, Grecia y Roma tenían formas elaboradas de música, a menudo vinculadas a rituales religiosos y eventos sociales.</p>
                <p className='text-sm'><strong>Sistema de Notación:</strong> Los griegos desarrollaron un sistema de notación musical que influyó en las tradiciones musicales posteriores.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Música en la Edad Media:</h3></div>
                <p className='text-sm'><strong>Música Litúrgica:</strong> La música estaba estrechamente ligada a la Iglesia, y la música litúrgica gregoriana era prominente.</p>
                <p className='text-sm'><strong>Polifonía:</strong> Surgió la polifonía, la combinación de varias líneas melódicas simultáneas, en la música vocal.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Renacimiento:</h3></div>
                <p className='text-sm'><strong>Renacimiento Musical:</strong> Se produjo un resurgimiento del interés en la música antigua y una evolución hacia formas más estructuradas.</p>
                <p className='text-sm'><strong>Invención de la Imprenta Musical:</strong> La invención de la imprenta musical permitió una distribución más amplia de partituras.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Barroco:</h3></div>
                <p className='text-sm'><strong>Música Barroca:</strong> Caracterizada por la ornamentación, la armonía expresiva y el contraste emocional.</p>
                <p className='text-sm'><strong>Ópera:</strong> Surgió la ópera en Italia como una forma de drama musical.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl mb-2'>Clasicismo:</h3></div>
                <p className='text-sm'><strong>Música Clásica:</strong> Caracterizada por la claridad, la forma equilibrada y la expresión controlada.</p>
                <p className='text-sm'><strong>Compositores Notables:</strong> Mozart, Haydn, Beethoven.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Romanticismo:</h3></div>
                <p className='text-sm'><strong>Énfasis en la Emoción:</strong> La música romántica se centró en la expresión emocional, la individualidad del compositor y la experimentación tonal.</p>
                <p className='text-sm'><strong>Compositores Notables:</strong> Beethoven, Chopin, Wagner.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Siglo XX:</h3></div>
                <p className='text-sm'><strong>Explosión de Estilos:</strong> El siglo XX vio una explosión de estilos musicales, desde el jazz y el blues hasta la música electrónica y el rock.</p>
                <p className='text-sm'><strong>Música Popular:</strong> El surgimiento de la música popular y la cultura de masas.</p>
              </div>
              <div className='p-4 border'>
                <div className={righteous.className}><h3 className='text-3xl'>Actualidad:</h3></div>
                <p className='text-sm'><strong>Diversidad Musical:</strong> La música contemporánea es increíblemente diversa, abarcando una amplia gama de géneros y estilos.</p>
                <p className='text-sm'><strong>Digitalización y Globalización:</strong> La tecnología digital y la globalización han transformado la forma en que se crea, distribuye y consume la música.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage
