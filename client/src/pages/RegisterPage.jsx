import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      // check for duplicate email error. The error is already written in the backend
     const errorMessage = e.response?.data?.error || "Registration failed. Please try again.";
     alert(errorMessage);
    }
  }

  return (
    <div className='flex items-center justify-around min-h-screen mt-6'>
      <div className='w-full max-w-2xl -mt-64 '>
        <h1 className='mb-3 text-2xl font-bold text-center'>Register</h1>
        <form
          onSubmit={registerUser}
          className='flex flex-col max-w-md mx-auto text-black bg-white rounded placeholder:bg-white'
        >
          <input
            required
            type='text'
            placeholder='Full Name'
            className='bg-white rounded outline-none'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>
          <div className='py-2 mt-3 text-center text-gray-500'>
            Already have an account?{" "}
            <span className='mr-1 text-black'>Login</span>
            <Link to="/login"
              className='font-semibold text-black underline cursor-pointer'
              
            >
              here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
