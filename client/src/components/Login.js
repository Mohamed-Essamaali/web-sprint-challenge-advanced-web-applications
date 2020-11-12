import React,{useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const Login = () => {
const[info,setInfo] =useState({
  username:'',
  password:''
})
  let {push} = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange=e=>{
    setInfo({...info,[e.target.name]:e.target.value})
    // console.log(info)
  }
  // const handleSubmit=e=>{
  //   e.preventDefault();
  //   axiosWithAuth()
  //   .post(`http://localhost:5000/api/login`,info)
  //   .then(res=>{
  //     localStorage.setItem('token',res.data.payload);
  //     push('/bubblePage')
  //     //reset the form
  //     setInfo({
  //       username:'',
  //       password:''
  //     })
  //   })
  //   .catch(err=>{
  //     console.log('Err is ',err)
  // })
  // }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' value={info.username} onChange={handleChange} placeholder='User Name'/>
        <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='Password'/>
        <button >Log in</button>
      </form>
    </>
  );
};

export default Login;
