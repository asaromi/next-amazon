import Head from 'next/head'
import {Banner, Header, ProductFeed} from '../components'

export const runtime = 'edge'
const Home = ({ products }) => {
  return (
    <div className="bg-gray-100 min-h-screen ">
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
