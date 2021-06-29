import Head from '../components/head'
import Header from '../components/header'
import Form from '../components/main'
import Footer from '../components/footer'
import { useState } from 'react'


export default function Home() {

  const initialValues = {
    location: '',
    maxCustomers: 0,
    minCustomers: 0,
    avgCookies: 0,
  };

  const [values, setValues] = useState(initialValues);

  function inputChangeHandler(event) {
    const { name, value} = event.target;

    setValues({...values, [name]: value });
}

  function createCookieHandler(event) {
    event.preventDefault();
    setValues(values)
  }

  return (
    <div>
      <Head title='Cookie Stand Admin'/>
      <Header title="Cookie Stand Admin" />
      <Form values={values} submitHandler={createCookieHandler} changeHandler={inputChangeHandler}  />
      <Footer />
    </div>
  )
}