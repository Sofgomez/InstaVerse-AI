import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const { logout } = useAuth();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-blue-700 mb-6'>
        Welcome to the App 🎉
      </h1>
      <button
        onClick={logout}
        className='bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md'
      >
        Logout
      </button>
    </div>
  );
}
