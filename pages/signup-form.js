import Link from "next/link";

export default function SignUpFormPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-400'>
      <div className='bg-white rounded-2xl shadow-lg w-80 p-8'>
        <h2 className='text-2xl font-bold text-blue-700 mb-6 text-center'>
          Hello, <br /> Sign Up!
        </h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              User Name
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Your Name'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Email Address
            </label>
            <input
              type='email'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='you@example.com'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Password
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Password'
            />
          </div>
          <div className='flex items-center text-xs gap-2'>
            <input type='checkbox' className='accent-blue-500' />
            <p>I accept the policy and terms.</p>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-2'
          >
            Sign up
          </button>
        </form>
        <div className='flex gap-4 mt-4 justify-center'>
          <Link href='#'>
            <img src='/icons/google.svg' alt='Google' className='h-6 w-6' />
          </Link>
          <Link href='#'>
            <img src='/icons/github.svg' alt='GitHub' className='h-6 w-6' />
          </Link>
          <Link href='#'>
            <img src='/icons/linkedin.svg' alt='LinkedIn' className='h-6 w-6' />
          </Link>
        </div>
      </div>
    </div>
  );
}
