import Categories from '@/components/Categories'
import React from 'react'

function page({params}) {
  return (
    <div>
        <Categories />
        <div className="flex m-10 text-center">
            Editando {params.id}
        </div>
    </div>
  )
}

export default page

