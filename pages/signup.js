import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-400'>
      <div className='bg-white rounded-2xl shadow-lg w-80 p-8 flex flex-col items-center'>
        <div className='text-blue-700 text-3xl font-bold mb-4'>🐬</div>
        <h2 className='text-2xl font-bold text-blue-700 mb-2'>DOLPHY APPSTA</h2>
        <p className='text-gray-600 mb-6'>It s easier to sign up now</p>
        <button className='flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mb-4'>
          Continue with Facebook
        </button>
        <p className='text-gray-600 text-sm mb-4'>I ll use email or phone</p>
        <div className='flex gap-4 mb-4'>
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
        <p className='text-gray-600 text-sm'>
          Already have account?{" "}
          <Link href='/login' className='text-blue-500 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
