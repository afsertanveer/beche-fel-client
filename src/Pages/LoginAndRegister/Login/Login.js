import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loader from '../../../Loader/Loader';
const Login = () => {
         useTitle('login')
         const { loading, logIn, googleLogin } = useContext(AuthContext);
          const navigate = useNavigate();
          const location = useLocation();
          const from = location.state?.from.pathname || "/";
         const {
           register,
           handleSubmit,
           formState: { errors },
         } = useForm();
         const [logInError, setLogInError] = useState("");
         const handleLogin = (data) => {
           console.log(data);
           const email=data.email;
           const password= data.password;
           logIn(email,password)
           .then(result=>{
            setLogInError('');
            toast.success('Successfully Logged In');
            navigate(from, { replace: true });
           })
           .catch(error=>{
            setLogInError(error.message);
           })

         };
         const handleGoogleLogIn=()=>{
          googleLogin()
          .then(result=>{
            result.user['role'] ='user';
            console.log(result.user);
            toast.success('Google Login Successful');
            navigate(from, { replace: true });
            
          })
          .catch(error=>console.error(error.message))
         }
         if(loading){
          return <Loader></Loader>
         }
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-error">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-error">{errors.password?.message}</p>
              )}
            </div>
            <input
              className="btn btn-secondary text-white font-semibold w-full mt-4"
              value="Log In"
              type="submit"
            />
            {logInError && <p className="text-error">{logInError}</p>}
          </form>
          <p className='text-center mt-2'>
            New to BecheFel? Please
            <Link to="/register" className="text-error underline font-semibold">
              Sign Up
            </Link>
          </p>
          <div className="divider">Google Login</div>
          <button onClick={handleGoogleLogIn} className="flex items-center btn btn-info w-full">
            <FaGoogle className="text-white mr-2"> </FaGoogle>
            <span className="text-white">Google</span>
          </button>
        </div>
      </div>
    );
};

export default Login;