'use client'

import Head from 'next/head'
import {useEffect, useState} from 'react'

import {Banner, ProductFeed} from '../components'
import exampleProducts from '../data/products'

const Home = () => {
  const [products, setProducts] = useState([])

  const beforeDestroy = () => {
    document.body.style.overflow = null
    setProducts(() => [])
  }

  const getProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(
        async (res) => {
          if (!res.ok) throw new Error('Something went wrong')
          const data = await res.json()
          setProducts(() => data)
        },
      )
      .catch((error) => {
        console.log('getting error while fetching products from fakestoreapi.com')
        console.error(error)

        setProducts(() => exampleProducts)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 2500)

    return beforeDestroy
  }, [])

  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <main className="max-w-hdPlus mx-auto">
        {/* Banner */}
        <Banner/>

        {/* ProductFeed */}
        <ProductFeed products={products}/>
      </main>
    </>
  )
}

export default Home
