import Head from '../components/head'
import Header from '../components/header'
import Form from '../components/main'
import Table from '../components/table'
import Footer from '../components/footer'
import { useState } from 'react'

export default function Home() {
  const [totalPerHour, setTotalPerHour] = useState(0);
  const [cookieStands, setCookieStands] = useState([])
 
  return (
    <div>
      <Head title ="Cookies Stand Admin"/>
      <Header title ="Cookies Stand Admin"/>
      <Form cookieStands={cookieStands} setCookies={setCookieStands} totalPerHour={totalPerHour} setTotalPerHour={setTotalPerHour}  />
      <Table stands={[cookieStands, totalPerHour]}/>
      <Footer cookieStandArr={cookieStands}/>
    </div>
  )
}