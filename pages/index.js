import Head from '../components/head'
import Header from '../components/header'
import Form from '../components/main'
import Footer from '../components/footer'
import { useState } from 'react'


export default function Home() {

  return (
    <div>
      <Head/>
      <Header title="Cookie Stand Admin" />
      <Form  />
      <Footer />
    </div>
  )
}