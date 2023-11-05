import React from 'react'
import Head from 'next/head'
import {CheckCircleIcon} from '@heroicons/react/solid'
import Link from 'next/link'

const SuccessPage = () => {
  return (
    <>
      <Head>
        <title>Success</title>
      </Head>

      <main className="max-w-hdPlus mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10"/>
            <h1 className="text-3xl">Thank you, your order has been confirmed!</h1>
          </div>

          <p>
            Thank you for shopping with us. We'll send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below.
          </p>
          <Link href="/orders" className="button text-center mt-8">Go to my orders</Link>
        </div>
      </main>
    </>
  )
}

export default SuccessPage
