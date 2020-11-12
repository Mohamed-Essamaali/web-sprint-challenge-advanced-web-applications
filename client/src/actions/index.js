import Login from '../components/Login';
import axiosWithAuth from '../utils/axiosWithAuth'



export const login=user=>dispatch=>{
   dispatch({type:LOGIN,payload:user})
    axiosWithAuth()
    .post(`http://localhost:5000/api/login`,user)
    .then(res=>{
        dispatch({type:SUCCESS,payload:user})
      localStorage.setItem('token',res.data.payload);
      push('/bubblePage')
      //reset the form
      setInfo({
        username:'',
        password:''
      })
    })
    .catch(err=>{
      console.log('Err is ',err)
  })
  }