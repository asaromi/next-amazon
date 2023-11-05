'use client'

import React, {useEffect, useState} from 'react'
import {collection, getDocs, getDocsFromServer, getDocsFromCache, limit, orderBy, query} from 'firebase/firestore'
import Head from 'next/head'
import {useSelector} from 'react-redux'

import {db} from '../app/firebase'
import stripe from '../app/stripe'
import {selectAuth} from '../slices/authSlice'
import {Order} from '../components'

const Orders = () => {
  const auth = useSelector(selectAuth)
  const [orders, setOrders] = useState([])
  const [clientRender, setClientRender] = useState(true)
  const minuteCount = new Date().getMinutes() % 5


  const getOrders = async () => {
    const q = query(
      collection(db, `users/${auth.user?.email}/orders`),
      orderBy('timestamp', 'desc'),
      limit(10),
    )

    const getOrdersData = minuteCount === 0 ? getDocsFromServer : getDocsFromCache
    const orderSnapshot = await getOrdersData(q)

    const newOrders = await Promise.all(
      orderSnapshot.docs.map(
        async (doc) => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp.toDate(),
          items: await stripe.checkout.sessions.listLineItems(doc.id, {limit: 100}).then(({data}) => data),
        }),
      ),
    )

    setOrders(() => newOrders)
    setClientRender(() => false)

    console.log('orders', newOrders)
  }

  useEffect(() => {
    if (auth.loggedIn) {
      getOrders()
    }
  }, [auth.loggedIn])

  return (
    <>
      <Head>
        <title>Your Orders</title>
      </Head>
      <main className="max-w-hdPlus mx-auto p-10 bg-white">
        {!clientRender && (
          <>
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400 ">Your orders</h1>
            {auth.loggedIn && (
              <h2>{orders.length} Orders</h2>
            ) || (
              <h2>Please sign in to see your orders</h2>
            )}

            <div className="mt-5 space-y-4">
              {orders.map(({ id, amount, amountShipping, images, items, timestamp, updatedAt }) => (
                <Order
                  key={id}
                  id={id}
                  amount={amount}
                  amountShipping={amountShipping}
                  images={images}
                  items={items}
                  timestamp={timestamp}
                  updatedAt={updatedAt}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default Orders
