import { useAuth } from "@/context/AuthContext";
import { useWorld } from "@/context/WorldContext";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const { universe, character } = useWorld();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      if (!universe) {
        router.push("/universe-selection");
      } else if (!character) {
        router.push("/character-selection");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isAuthenticated, universe, character, router]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      login(); // Solo activa isAuthenticated true
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-black'>
      {/* Left Side (Image and Slogan) */}
      <div className='relative md:w-1/2 w-full flex flex-col justify-center items-center p-10'>
        <div className='text-center'>
          <Image
            src='/astronaut.svg'
            width={300}
            height={300}
            alt='Astronaut'
            className='mx-auto w-60 md:w-80'
          />
          <h2 className='text-2xl md:text-3xl font-bold text-white mt-6'>
            Turn your ideas into reality.
          </h2>
          <p className='mt-4 text-gray-400'>
            Start for free and join the creative community.
          </p>
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div className='flex-1 flex items-center justify-center p-8 bg-black'>
        <div className='w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg'>
          <div className='flex justify-center mb-6'>
            <Image
              src='/logo.svg'
              width={500}
              height={500}
              alt='Logo'
              className='h-20'
            />
          </div>
          <h2 className='text-2xl font-bold text-center mb-6 text-white'>
            Welcome Back
          </h2>
          <form className='space-y-4' onSubmit={handleLogin}>
            <div>
              <label className='block text-sm font-semibold text-gray-300 mb-1'>
                Email
              </label>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-700'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-300 mb-1'>
                Password
              </label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-700'
                required
              />
            </div>

            <div className='flex justify-between text-sm mt-2'>
              <label className='flex items-center space-x-2'>
                <input type='checkbox' className='accent-purple-600' />
                <span className='text-gray-300'>Remember me</span>
              </label>
              <a href='#' className='text-purple-400 hover:underline'>
                Forgot password?
              </a>
            </div>

            <button
              type='submit'
              className='w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md mt-4 transition-colors'
            >
              Login
            </button>
          </form>

          {/* Social login icons */}
          <div className='flex justify-center gap-4 mt-6'>
            <a href='#'>
              <Image
                src='/discord.svg'
                alt='Discord'
                width={300}
                height={300}
                className='h-8 w-8 hover:scale-110 transition'
              />
            </a>
            <a href='#'>
              <Image
                src='/x.svg'
                alt='x'
                width={300}
                height={300}
                className='h-8 w-8 hover:scale-110 transition'
              />
            </a>
            <a href='#'>
              <Image
                src='/email.svg'
                alt='Email'
                width={300}
                height={300}
                className='h-8 w-8 hover:scale-110 transition'
              />
            </a>
          </div>

          {/* Sign up link */}
          <p className='text-center text-sm text-gray-400 mt-6'>
            Not registered yet?{" "}
            <a href='/signup' className='text-purple-400 hover:underline'>
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
