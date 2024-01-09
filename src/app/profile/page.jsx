"use client"

import React from 'react'
import Image from 'next/image'
import choso from '@/assets/choso.jpeg'

function Profile() {
  return (
    <div>
      <div className='username border mx-52 my-10 flex items-center'>
        <div className="p-10">
          <h1 className='text-9xl w-1/3'>Yago Vega</h1>
          <p className='mt-10'>batiyago.js@gmail.com</p>
        </div>
        <div className="user-img-profile flex justify-end items-center w-full m-5">
          <Image
            src={choso}
            title='idk'
            className='border'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile