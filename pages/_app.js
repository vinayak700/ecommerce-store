import React from 'react'
import '../styles/globals.css'
import '../styles/search.css'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

// const authToken = false;

export default function App({ Component, pageProps }) {
  // if (!authToken) return <Auth />
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}