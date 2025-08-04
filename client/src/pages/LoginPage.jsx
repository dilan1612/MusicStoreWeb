import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContex';
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

function LoginPage() {

  const {register, handleSubmit, formState: errors} = useForm()


  const {signin, errors: signinErrors, isAuthenticated}= useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    signin(data)
  });

   useEffect(() => {
     if(isAuthenticated) navigate('/instrument'); 
     }, [isAuthenticated]);
  


  return (

    
    <div className='flex h-[calc(100vh-100px)]  items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full max-h-full p-10 rounded-md '>
      {
        signinErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
            {error}
            </div>
        )) }

        <h1 className='text-2xl font-bold'>LOGIN</h1>
     <form onSubmit={onSubmit}>

            <input type="email" {... register("email", {required: true})} 
            className='w-full bg-zinc-700 text-white p-8 px-4 9y-2 rounded-md my-2' placeholder='email'/>
            {errors.email && <span className='text-red-500'>Email is required</span>}

            <input type="password" {... register("password", {required:true})}
            className='w-full bg-zinc-700 text-white p-8 px-4 9y-2 rounded-md my-2' placeholder='password' />
            {errors.password && <p className='text-red-500'>Password is required</p>}


            <button type='submit' className='bg-indigo-500 px-3 py-2 rounded-md my-2'>
                Login
            </button>

        </form>
        <p className='flex gap-x-2 justify-between'>

          Don't have an account? <Link to="/register" className='text-blue-500 '>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage