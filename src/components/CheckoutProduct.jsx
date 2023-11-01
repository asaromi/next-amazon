import React from 'react'
import Image from 'next-image-export-optimizer'
import {StarIcon} from '@heroicons/react/solid'
import {useDispatch} from 'react-redux'
import Currency from './Currency'
import {addToBasket, removeFromBasket} from '../slices/basketSlice'

const CheckoutProduct = ({ id, title, price, rating, description, category, image, hasPrime }) => {
  const dispatch = useDispatch()
  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id, title, price, rating, description, category, image, hasPrime
      })
    )
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        alt={`product image ${id}`}
        width={200} height={200}
        objectFit="contain"
      />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500"/>
          ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency price={price} currency="USD" />

        {hasPrime && (
          <div className="flex items-center space-x-2 py-3">
            <img
              loading="lazy"
              src="https://cdn.pnghd.pics/data/4/amazon-prime-png-logo-29.png"
              alt="prime tag delivery"
              className="mt-0.5 h-5 aspect-auto"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
