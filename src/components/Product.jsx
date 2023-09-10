import React from 'react'
import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid'
import {useDispatch} from 'react-redux'

import {addToBasket} from '../slices/basketSlice'
import Currency from './Currency'

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({id, title, price, description, category, image, isPrime}) => {
  const dispatch = useDispatch()
  const [rating] = React.useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING))
  const [hasPrime] = isPrime ? [isPrime] : React.useState(Math.random() < 0.5)

  const addProductToBasket = () => {
    const product = { id, title, price, rating, description, category, image, hasPrime }

    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product))
  }

  if (!id || !image) return null

  return (
    <div className="relative flex flex-col m-5 p-10 bg-white z-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      <Image
        src={image}
        alt={`product image ${id}`}
        width={200} height={200}
        className="w-4/5 max-w-50 object-contain aspect-square mx-auto"
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {StarIcon && Array(rating).fill().map((_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500"/>
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency price={price} currency="USD" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 py-5">
          <img
            loading="lazy"
            src="https://cdn.pnghd.pics/data/4/amazon-prime-png-logo-29.png"
            alt="prime tag delivery"
            className="h-5 aspect-auto"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button" onClick={addProductToBasket}>
        Add to Basket
      </button>
    </div>
  )
}

export default Product
