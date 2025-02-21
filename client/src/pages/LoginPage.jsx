import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 async function handleLogin(e) {
    e.preventDefault();
    try {
     await axios.post('/login', {email, password})
     
    } catch (e) {
      const errorMessage = e.response?.data?.error || "Login failed. Please try again.";
      alert(errorMessage)
    }
    
  }
  
  return (
    <div className='flex items-center justify-around min-h-screen mt-6'>
      <div className='w-full max-w-2xl -mt-64 '>
        <h1 className='mb-3 text-2xl font-bold text-center'>Login</h1>
        <form
          onSubmit={handleLogin}
          className='flex flex-col max-w-md mx-auto text-gray-600 bg-white rounded placeholder:bg-white'
        >
          <input
            required
            type='email'
            placeholder='your@email.com'
            className='bg-white rounded outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type='password'
            placeholder='password'
            className='bg-white rounded outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='p-2 font-bold text-white rounded-lg bg-primary'>
            Login
          </button>
          <div className='py-2 mt-3 text-center text-gray-500'>
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className='text-black underline cursor-pointer'
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
