import React from 'react'
import Head from 'next/head';
import Footer from './footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>VG E-Store</title>
      </Head>
      <header className='fixed'>
        <Navbar />
      </header>
      <main className='main-container'>
      {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
// 179 179 250 1