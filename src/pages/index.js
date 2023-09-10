import Head from 'next/head'
import {useEffect, useState} from 'react'

import {Banner, Header, ProductFeed} from '../components'
import {products as exampleProducts} from '../data/products'

// needed for each page for deployment purposes (cloudflare pages)
export const runtime = process.env.RUNTIME_MODE

const Home = ({products}) => {
  const [clientRender, setClientRender] = useState(false)

  const beforeDestroy = () => {
    document.body.style.overflow = null
  }

  useEffect(() => {
    setClientRender(true)

    return beforeDestroy
  })

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

export const getServerSideProps = async () => {
  console.group('getting data from fakestoreapi.com')
  const products = (await fetch('https://fakestoreapi.com/products')
    .then(
      async (res) => (res && await res.json() || exampleProducts),
    )
    .catch((error) => {
      console.log('getting error while fetching products from fakestoreapi.com')
      console.error(error)

      return exampleProducts
    })
    .finally(() => console.groupEnd())
  )

  return {
    props: {
      products,
    },
  }
}

export default Home
