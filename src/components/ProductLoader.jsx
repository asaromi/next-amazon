import React from 'react'
import {StarIcon} from '@heroicons/react/solid'

const ProductLoader = () => {
  return (
    <div className="relative flex flex-col m-5 p-10 bg-white z-10">
      <div className="absolute top-2 right-2 h-4 w-1/4 bg-gray-300 animate-pulse rounded-md"/>

      <div className="w-4/5 min-h max-w-50 object-contain aspect-square mx-auto bg-gray-400 animate-pulse rounded-md" />

      <div className="h-5.5 mt-3 mb-0.5 animate-pulse bg-gray-300 rounded-md"/>
      <div className="h-5.5 w-1/4 mb-3 animate-pulse bg-gray-300 rounded-md"/>

      <div className="flex">
        <StarIcon className="h-5 text-gray-400 animate-pulse rounded-md"/>
        <StarIcon className="h-5 text-gray-400 animate-pulse rounded-md"/>
      </div>

      <div className="h-4 mt-2 mb-0.5 bg-gray-300 animate-pulse rounded-md"/>
      <div className="h-4 w-2/3 mb-2 bg-gray-300 animate-pulse rounded-md"/>

      <div className="h-6 w-1/5 mb-5 bg-gray-300 animate-pulse rounded-md"/>


      <div className="flex items-center space-x-2 -mt-5 py-5">
        <div className="h-5 w-1/5 bg-gray-300 animate-pulse rounded-md" />

        <div className="h-4 w-2/5 bg-gray-300 animate-pulse rounded-md"/>
      </div>

      <button className="h-9 p-2 button animate-pulse" onClick={() => console.log('logging dulu')}>
        <span className="h-5 w-1/3 text-center bg-yellow-500 animate-pulse" />
      </button>
    </div>
  )
}

export default ProductLoader
