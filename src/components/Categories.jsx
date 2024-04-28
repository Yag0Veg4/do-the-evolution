import React from 'react'
import Link from 'next/link'
import { inter } from '../app/fonts'

function Categories() {
    const categories = [
        "Descubrir",
        "Rock",
        "Metal",
        "Jazz",
        "Blues & Soul",
        "Rap | HipHop",
        "Electronica",
        "Pop"
    ]

  return (
    <section className={inter.className} >
        <div className="hidden lg:flex font-bold bg-zinc-900 text-lime-400 w-full justify-center border-t border-white">
          {categories.map((categorie, i) => (
            <Link 
              className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5'
              href={`/${categorie}`}
              key={i}
              >
                {categorie}
            </Link>
          ))}
        </div>
    </section>
  )
}

export default Categories
