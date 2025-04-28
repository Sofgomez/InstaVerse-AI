import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <AuthLayout>
      <h2 className='text-2xl font-bold text-blue-700 mb-6 text-center'>
        Welcome Back, Log In!
      </h2>
      <form className='space-y-4' onSubmit={handleLogin}>
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-1'>
            Email Address
          </label>
          <input
            type='email'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='you@example.com'
            required
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
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-2'
        >
          Log in
        </button>
      </form>
    </AuthLayout>
  );
}
