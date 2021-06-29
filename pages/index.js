import Head from '../components/head'
import Header from '../components/header'
import Form from '../components/main'
import Footer from '../components/footer'
import { useState } from 'react'


export default function Home() {

  const initialValues = {
    location: '',
    minCustomers: 0,
    maxCustomers: 0,
    avgCookies: 0,
  };

  const [location, setLocation] = useState(initialValues.location);
  const [minCustomers, setMin] = useState(initialValues.minCustomers);
  const [maxCustomers, setMax] = useState(initialValues.maxCustomers);
  const [avgCookies, setAvgCookie] = useState(initialValues.avgCookies);

  function createCookieHandler(event) {
    event.preventDefault();
    const e = event.target
    setLocation(e.location.value)
    setMin(e.minCustomers.value)
    setMax(e.maxCustomers.value)
    setAvgCookie(e.avgCookies.value)
  }

  return (
    <div>
      <Head title='Cookie Stand Admin'/>
      <Header title="Cookie Stand Admin" />
      <Form location={location} minCustomers={minCustomers} maxCustomers={maxCustomers} avgCookies={avgCookies} submitHandler={createCookieHandler}/>
      <Footer />
    </div>
  )
}