import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function HomePage() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; // while redirecting

  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center p-8'>
      <h1 className='text-4xl font-extrabold text-purple-600 mb-6 text-center'>
        Welcome to InstaVerse AI
      </h1>
      <p className='text-gray-400 max-w-2xl text-center mb-8'>
        Your AI-generated social life starts here. Upload your photos, interact
        with AI followers, explore fictional universes, and become whoever you
        want to be.
      </p>
      <button
        onClick={logout}
        className='bg-purple-700 hover:bg-purple-800 px-6 py-2 rounded-md text-white font-semibold'
      >
        Logout
      </button>
    </div>
  );
}
