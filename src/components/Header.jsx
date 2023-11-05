'use client'

import React, {useContext, useEffect} from 'react'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import {GoogleAuthProvider, signInWithPopup, signOut as signOutFirebase} from 'firebase/auth'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

import {auth} from '../app/firebase'
import {AuthContext} from '../hooks/authProvider'
import {selectItems} from '../slices/basketSlice'
import Link from 'next/link'

const provider = new GoogleAuthProvider()

const Header = () => {
  const router = useRouter()
  const items = useSelector(selectItems)
  const {user, loggedIn} = useContext(AuthContext)

  const signIn = () => signInWithPopup(auth, provider)
      .catch(console.error)

  const signOut = () => {
    console.log('trying to sign out')
    return signOutFirebase(auth)
      .catch(console.error)
  }

  return (
    <header>
      {/* Top Nav */}
      <div className="flex flex-grow items-center bg-amazon_blue py-2.5 px-1">
        <Link
          href="/"
          className="justify-start flex flex-grow sm:flex-grow-0 items-center mt-2"
        >
          <img
            alt="amazon logo"
            src="https://links.papareact.com/f90"
            width={125}
            height={40}
            className="cursor-pointer aspect-auto object-contain object-center mx-5"
          />
        </Link>

        {/* Search bar */}
        <div className="hidden sm:flex flex-grow items-center h-10 bg-yellow-400 rounded-md cursor-pointer ml-2">
          <input
            className="py-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4"/>
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <button
            className="text-start link"
            onClick={() => !user && signIn() || signOut()}
          >
            <p>{`Hello ${user?.displayName || 'Guest'}`}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </button>

          <Link className="link" href="/orders">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">{'& Orders'}</p>
          </Link>

          <Link
            className="relative link flex justify-start items-center"
            href="/checkout"
          >
            <span
              className="absolute bg-yellow-400 top-0 right-0 md:right-10 h-4 w-4 text-center text-black font-bold rounded-full"
            >
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10"/>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </Link>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"/>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline-flex link">
          Electronics
        </p>
        <p className="hidden lg:inline-flex link">
          Food & Grocery
        </p>
        <p className="hidden lg:inline-flex link">
          Prime
        </p>
        <p className="hidden lg:inline-flex link">
          Buy Again
        </p>
        <p className="hidden lg:inline-flex link">
          Shopper Toolkit
        </p>
        <p className="hidden lg:inline-flex link">
          Health & Personal Care
        </p>
      </div>
    </header>
  )
}

export default Header
