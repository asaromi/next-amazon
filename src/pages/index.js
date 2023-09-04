import Head from 'next/head'
import {Banner, Header, ProductFeed} from '../components'
import {useEffect} from 'react'

export const runtime = 'experimental-edge'
const Home = ({ products }) => {
  const beforeDestroy = () => {
    document.body.style.overflow = null
  }

  useEffect(() => {
    if(document) document.body.style.overflow = 'auto'

    return beforeDestroy
  })

  return (
    <div className="bg-gray-100 min-h-screen overflow-y-auto">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header/>

      <main className="max-w-fhd mx-auto">
        {/* Banner */}
        <Banner/>


        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const products = (await fetch('https://fakestoreapi.com/products').then(
    async (res) => await res.json()
  ) || [])

  return {
    props: {
      products,
    },
  }
}

export default Home
