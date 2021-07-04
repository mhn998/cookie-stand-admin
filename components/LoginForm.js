  function LoginForm(props){

    return(
        <div>
        <form onSubmit = {props.saveInfo} className='w-7/12 p-2 p-8 m-20 ml-auto mr-auto bg-green-200 border-green-500 rounded-3xl'>
            <label className='p-2 text-center '>username</label><br/>
            <input className="w-full p-1" type="text" placeholder="Username" id ='username' required /><br/>
  
            <label className='p-2 text-center'>password</label><br/>
            <input className="w-full p-1" type="password" placeholder="Password" id ='password' required /><br/>
  
            <button type="submit" className='w-full px-10 py-3 mt-10 text-white bg-green-500 rounded-xl hover:text-green-600 hover:bg-green-100 '>sign in</button>

        </form>
    </div>
    )
}

export default LoginForm;