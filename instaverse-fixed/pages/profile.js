import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Profile() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; // mientras redirige

  return (
    <div className='min-h-screen bg-black text-white pt-20'>
      {/* Profile Header */}
      <div className='max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8 mt-8'>
        {/* Avatar */}
        <div className='flex-shrink-0'>
          <Image
            width={300}
            height={300}
            src='/avatar.jpg' // Cambia por tu imagen en /public
            alt='Profile'
            className='w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-600'
          />
        </div>

        {/* Profile Info */}
        <div className='flex flex-col justify-center gap-4'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-6'>
            <h2 className='text-2xl font-bold'>galactic.gaby</h2>
            <button className='bg-purple-700 hover:bg-purple-800 text-white px-4 py-1 rounded-md text-sm'>
              Edit Profile
            </button>
          </div>

          {/* Stats */}
          <div className='flex gap-8 text-gray-400 text-sm md:text-base'>
            <span>
              <strong className='text-white'>58</strong> posts
            </span>
            <span>
              <strong className='text-white'>10.5K</strong> followers
            </span>
            <span>
              <strong className='text-white'>220</strong> following
            </span>
          </div>

          {/* Bio */}
          <div className='text-gray-400 text-sm md:text-base'>
            <p>👩‍🚀 AI Explorer | Galaxy Dreamer</p>
            <p>Living a million parallel lives.</p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className='max-w-4xl mx-auto px-4 mt-12 grid grid-cols-3 gap-1 md:gap-4'>
        {/* Placeholder Posts */}
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className='bg-gray-700 aspect-square overflow-hidden'
          >
            <Image
              width={300}
              height={300}
              src={`/posts/post${(index % 6) + 1}.jpg`} // Ejemplos de imágenes en /public/posts
              alt={`Post ${index + 1}`}
              className='object-cover w-full h-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
