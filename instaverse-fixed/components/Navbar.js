import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) return null; // no mostrar navbar si no está logueado

  return (
    <nav className='fixed top-0 left-0 right-0 bg-black shadow-md flex items-center justify-between p-4 z-50'>
      {/* Left Logo */}
      <Link href='/'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <Image
            src='/logo.svg'
            width={300}
            height={300}
            alt='InstaVerse Logo'
            className='h-8'
          />
          <span className='text-purple-500 font-bold text-lg hidden md:inline'>
            InstaVerse AI
          </span>
        </div>
      </Link>

      {/* Center icons */}
      <div className='flex items-center gap-6'>
        <Link href='/dashboard' className='text-white hover:text-purple-400'>
          🏠
        </Link>
        <Link href='/search' className='text-white hover:text-purple-400'>
          🔍
        </Link>
        <Link href='/explore' className='text-white hover:text-purple-400'>
          ✨
        </Link>
        <Link href='/messages' className='text-white hover:text-purple-400'>
          💌
        </Link>
        <Link
          href='/notifications'
          className='text-white hover:text-purple-400'
        >
          🔔
        </Link>
        <Link href='/profile' className='text-white hover:text-purple-400'>
          👤
        </Link>
      </div>

      {/* Right Logout */}
      <button
        onClick={handleLogout}
        className='text-white hover:text-purple-400 font-semibold'
      >
        Logout
      </button>
    </nav>
  );
}
