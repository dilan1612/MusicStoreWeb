import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContex'
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


function RegisterPage() {

    const{register, handleSubmit, formState: {errors}} = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate('/instrument'); 
        }, [isAuthenticated]);


    const onSubmit =  handleSubmit(async (values) => {
      signup(values);
        

    });

  return (

      <div className='flex h-[calc(100vh-100px)]  items-center justify-center'>

      
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>

       <h1 className='text-2xl font-bold'>REGISTER</h1>
      {
        registerErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center' key={i}>
            {error}
            </div>
        ))
      }



        <form onSubmit={onSubmit}>
            <input type="text" {... register("username", {required: true}) } 
            className='w-full bg-zinc-700 text-white p-8 px-4 9y-2 rounded-md my-2' placeholder="Username"/>

            {errors.username && <span className='text-red-500'>Username is required</span>}

            <input type="email" {... register("email", {required: true})} 
            className='w-full bg-zinc-700 text-white p-8 px-4 9y-2 rounded-md my-2' placeholder='email'/>
            {errors.email && <span className='text-red-500'>Email is required</span>}

            <input type="password" {... register("password", {required:true})}
            className='w-full bg-zinc-700 text-white p-8 px-4 9y-2 rounded-md my-2' placeholder='password' />
            {errors.password && <p className='text-red-500'>Password is required</p>}


            <button type='submit' className='bg-indigo-500 px-3 py-2 rounded-md my-2'>
                Register
            </button>

        </form>
      <p className='flex gap-x-2 justify-between'>

          Already have an account? <Link to="/login" className='text-blue-500 '>Login</Link>
        </p>

    </div>

    </div>
  )
}

export default RegisterPage