import React from 'react'
import Link from "next/link";
import { inter } from '@/app/fonts';

function Categories() {
  return (
    <section className={inter.className} >
        <div className="flex font-bold bg-zinc-900 text-lime-400 justify-evenly p-3 border-t border-white">
            <Link href='/descubrir'>Descubrir</Link>
            <Link href='/rock'>Rock</Link>
            <Link href='/metal'>Metal</Link>
            <Link href='/jazz'>Jazz</Link>
            <Link href='/blues-n-soul'>Blues & Soul</Link>
            <Link href='/rap-hiphop'>Rap | HipHop</Link>
            <Link href='/electronica'>Electrónica</Link>
            <Link href='/pop'>Pop</Link>
        </div>
    </section>
  )
}

export default Categories
