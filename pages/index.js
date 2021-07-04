import Head from '../components/CookieStandHead'
import Header from '../components/CookieStandHeader'
import Form from '../components/CookieStandMain'
import Table from '../components/CookieStandTable'
import Footer from '../components/CookieStandFooter'
import Login from '../components/LoginForm'
import { useState } from 'react'
import axios from 'axios'
const base_url = 'https://cookie-stand0seatt.herokuapp.com/'

export default function Home() {
  const [totalPerHour, setTotalPerHour] = useState(0);
  const [cookieStands, setCookieStands] = useState([])
  const [isLogin, setIsLogin] = useState(false) // Extra
  
  async function saveInfo(e){
    e.preventDefault();
    const loginInfo = {
        username : e.target.username.value ,
        password : e.target.password.value,
      };
      getData(loginInfo)
    }

  async function login(loginInfo) {
    return axios.post(`${base_url}api/token/`, loginInfo);
  }

  async function fetchStands(loginInfo) {
    try{
    const tokenResponse = await login(loginInfo)
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(`${base_url}api/v1/cookie_stands/`, config);
    setIsLogin(true)
    return response.data;
  }catch(error){
    alert('Wrong username or password')
  }
    
  }

  async function getData(loginInfo) {
    setCookieStands(await fetchStands(loginInfo));
  }

  if (isLogin){
  
  return (
    <div>
    <Head title ="Cookies Stand Admin"/>
    <Header title ="Cookies Stand Admin"/>
    <Form cookieStands={cookieStands} setCookies={setCookieStands} totalPerHour={totalPerHour} setTotalPerHour={setTotalPerHour}  />
    <Table stands={[cookieStands, totalPerHour]}/>
    <Footer cookieStandArr={cookieStands}/>
  </div>
  )}else{
    return(
      <Login saveInfo ={saveInfo} />
    )
  }
}