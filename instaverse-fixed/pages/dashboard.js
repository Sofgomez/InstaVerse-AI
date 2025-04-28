import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; // mientras redirige

  return (
    <div className='min-h-screen bg-black text-white flex flex-col'>
      {/* Top Bar */}
      <header className='flex justify-between items-center p-6 bg-gray-900 shadow-md'>
        <h1 className='text-2xl font-bold text-purple-500'>InstaVerse AI</h1>
        <button
          onClick={logout}
          className='bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md'
        >
          Logout
        </button>
      </header>

      {/* Dashboard Content */}
      <main className='flex-1 p-8'>
        <section className='text-center mb-12'>
          <h2 className='text-3xl font-extrabold text-purple-400 mb-4'>
            Welcome to your AI Universe!
          </h2>
          <p className='text-gray-400 max-w-xl mx-auto'>
            Manage your AI followers, post new content, explore alternative
            universes, and grow your virtual fame.
          </p>
        </section>

        {/* Feature Cards */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Card: Post */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-purple-500/30 transition'>
            <h3 className='text-xl font-bold text-white mb-2'>
              📸 Post Something
            </h3>
            <p className='text-gray-400'>
              Upload photos, videos or stories. Let your AI fans react
              automatically.
            </p>
          </div>

          {/* Card: Followers */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-purple-500/30 transition'>
            <h3 className='text-xl font-bold text-white mb-2'>
              🤖 Manage Followers
            </h3>
            <p className='text-gray-400'>
              Customize your AI audience: artists, influencers, critics, fans...
              you decide!
            </p>
          </div>

          {/* Card: Direct Messages */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-purple-500/30 transition'>
            <h3 className='text-xl font-bold text-white mb-2'>
              💌 Direct Messages
            </h3>
            <p className='text-gray-400'>
              Talk to your best friends, haters, lovers or fanatics created by
              AI.
            </p>
          </div>

          {/* Card: Alternate Universes */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-purple-500/30 transition'>
            <h3 className='text-xl font-bold text-white mb-2'>
              🎭 Alternate Universes
            </h3>
            <p className='text-gray-400'>
              Publish inside Hogwarts, Star Wars, or futuristic worlds. Switch
              your reality.
            </p>
          </div>

          {/* Card: Missions */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-purple-500/30 transition'>
            <h3 className='text-xl font-bold text-white mb-2'>
              🧩 Missions & Challenges
            </h3>
            <p className='text-gray-400'>
              Complete tasks, earn fame, unlock special bots and exclusive
              filters.
            </p>
          </div>

          {/* Card: Fame Meter */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-purple-500/30 transition'>
            <h3 className='text-xl font-bold text-white mb-2'>📈 Fame Meter</h3>
            <p className='text-gray-400'>
              Track your popularity evolution in the InstaVerse. From niche
              influencer to worldwide phenomenon.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
