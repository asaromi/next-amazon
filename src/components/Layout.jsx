import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-y-auto overflow-x-hidden">
      <Header/>

      {children}
    </div>
  )
}

export default Layout
