import React from 'react'
import Link from "next/link";
import { inter } from '@/app/fonts';

function Categories() {
  return (
    <section className={inter.className} >
        <div className="flex font-bold bg-zinc-900 text-lime-400 justify-evenly border-t border-white">
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/descubrir'>Descubrir</Link>
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/rock'>Rock</Link>
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/metal'>Metal</Link>
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/jazz'>Jazz</Link>
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/blues-n-soul'>Blues & Soul</Link>
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/rap-hiphop'>Rap | HipHop</Link>
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/electronica'>Electrónica</Link>
            <Link className='transition duration-200 hover:bg-zinc-700 w-auto h-auto p-5' href='/pop'>Pop</Link>
        </div>
    </section>
  )
}

export default Categories
