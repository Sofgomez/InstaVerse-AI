import Image from "next/image";

export default function SignUpPage() {
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

      {/* Right Side (Sign Up Form) */}
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
            Create Account
          </h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-semibold text-gray-300 mb-1'>
                Name
              </label>
              <input
                type='text'
                placeholder='Full Name'
                className='w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-700'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-300 mb-1'>
                Email
              </label>
              <input
                type='email'
                placeholder='Email'
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
                className='w-full border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-700'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md mt-4 transition-colors'
            >
              Sign Up
            </button>
          </form>

          {/* Social Sign Up icons */}
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

          {/* Already have account */}
          <p className='text-center text-sm text-gray-400 mt-6'>
            Already have an account?{" "}
            <a href='/login' className='text-purple-400 hover:underline'>
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
