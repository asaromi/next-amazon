'use client'

import Head from 'next/head'
import {useEffect, useState} from 'react'

import {Banner, Header, ProductFeed} from '../components'
import {products as exampleProducts} from '../data/products'

const Home = () => {
  const [clientRender, setClientRender] = useState(false)
  const [products, setProducts] = useState([])

  const beforeDestroy = () => {
    document.body.style.overflow = null
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
    )

    setProducts(() => (productsData || exampleProducts))
  }

  useEffect(() => {
    setClientRender(true)
    getProducts()

    return beforeDestroy
  }, [])

  return clientRender && (
    <div className="bg-gray-100 min-h-screen overflow-y-auto overflow-x-hidden">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header/>

      <main className="max-w-fhd mx-auto">
        {/* Banner */}
        <Banner/>

        {/* ProductFeed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  ) || null
}

export default Home
