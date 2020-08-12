import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Note App</title>
      </Head>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

export default Layout
