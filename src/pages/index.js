'use client'

import Head from 'next/head'
import {useEffect, useState} from 'react'

import {Banner, Header, ProductFeed} from '../components'
import {products as exampleProducts} from '../data/products'

const Home = () => {
  const [clientRender, setClientRender] = useState(true)
  const [products, setProducts] = useState([])

  const beforeDestroy = () => {
    document.body.style.overflow = null
    setProducts(() => [])
  }

  const getProducts = async () => {
    const productsData = (await fetch('https://fakestoreapi.com/products')
        .then(
          async (res) => (await res.json()),
        )
        .catch((error) => {
          console.log('getting error while fetching products from fakestoreapi.com')
          console.error(error)

          return null
        })
        .finally(() => setClientRender(() => false))
    )

    setProducts(() => (productsData || exampleProducts))
  }

  useEffect(() => {
    getProducts()

    return beforeDestroy
  }, [])

  return !clientRender && (
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
  ) || null
}

export default Home
