'use client'

import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import Image from 'next-image-export-optimizer'
import Head from 'next/head'
import {useSelector} from 'react-redux'

import {Currency, CheckoutProduct, Header} from '../components'
import {selectItems, selectTotalPrices} from '../slices/basketSlice'
import {selectAuth} from '../slices/authSlice'

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)

const Checkout = () => {
  const items = useSelector(selectItems)
  const subtotal = useSelector(selectTotalPrices)
  const auth = useSelector(selectAuth)

  const createCheckoutSession = async () => {
    await fetch(`${process.env.API_URL}/api/v1/stripe/checkout-session`, {
      method: 'POST',
      body: JSON.stringify({
        items,
        email: auth.user.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (res.ok) {
          const {data: {url}} = await res.json()
          console.log('url', url)
          window.location.href = url
        }
      })
  }

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      <div className="bg-gray-100">
        <Header/>

        <main className="lg:flex max-w-fhd mx-auto">
          {/* Left */}
          <div className="flex-grow shadow-sm m-5">
            <Image
              src="https://links.papareact.com/ikj"
              width={1020} height={250}
              alt="banner checkout"
              className="object-contain object-center"
            />

            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4">
                {items.length === 0 ? 'Your Amazon Basket is empty.' : 'Shopping Basket'}
              </h1>

              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col bg-white p-10 shadow-md">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap">Subtotal ({items.length} items):{' '}
                  <span className="font-bold">
                    <Currency price={subtotal}/>
                  </span>
                </h2>

                <button
                  role="link"
                  disabled={!auth?.loggedIn}
                  className={`button mt-2 disabled:pointer-events-none ${!auth?.loggedIn && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                  onClick={createCheckoutSession}
                >
                  {!auth?.loggedIn ? 'Sign in to checkout' : 'Proceed to checkout'}
                </button>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default Checkout
