import { useAuth } from "@/context/AuthContext";
import { useWorld } from "@/context/WorldContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const universes = [
  { name: "Hogwarts", emoji: "🧙‍♂️" },
  { name: "Star Wars", emoji: "🚀" },
  { name: "Cyberpunk", emoji: "🤖" },
  { name: "Futuristic Instagram", emoji: "📸" },
  { name: "Famous Universe", emoji: "🌟" },
];

const botsByUniverse = {
  Hogwarts: [
    { name: "Hermione", emoji: "📚" },
    { name: "Harry", emoji: "⚡" },
    { name: "Ron", emoji: "🦁" },
  ],
  "Star Wars": [
    { name: "Yoda", emoji: "🧙‍♂️" },
    { name: "Darth Vader", emoji: "🌑" },
    { name: "R2D2", emoji: "🤖" },
  ],
  Cyberpunk: [
    { name: "Neo", emoji: "🕶️" },
    { name: "Trinity", emoji: "💻" },
    { name: "Morpheus", emoji: "🔮" },
  ],
  "Futuristic Instagram": [
    { name: "GlamBot", emoji: "🤳" },
    { name: "TrendAI", emoji: "📈" },
    { name: "HypeMachine", emoji: "🚀" },
  ],
  "Famous Universe": [
    { name: "CelebrityBot", emoji: "🌟" },
    { name: "PaparazziBot", emoji: "📸" },
    { name: "SuperstarAI", emoji: "🏆" },
  ],
};

export default function UniverseSelection() {
  const { isAuthenticated } = useAuth();
  const { chooseUniverse, chooseCharacter } = useWorld();
  const router = useRouter();
  const [selectedUniverse, setSelectedUniverse] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  const handleUniverseSelect = (universeName) => {
    chooseUniverse(universeName);
    setSelectedUniverse(universeName);
  };

  const handleBotSelect = (botName) => {
    chooseCharacter(botName);
    router.push("/dashboard");
  };

  return (
    <div className='min-h-screen bg-black text-white pt-20 p-8 flex flex-col items-center'>
      {!selectedUniverse ? (
        <>
          <h1 className='text-3xl font-bold text-purple-400 mb-6 text-center'>
            Choose your Universe
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl'>
            {universes.map((universe) => (
              <button
                key={universe.name}
                onClick={() => handleUniverseSelect(universe.name)}
                className='bg-gray-800 hover:bg-purple-700 text-white py-4 px-6 rounded-lg flex items-center justify-center text-lg font-semibold transition'
              >
                {universe.emoji} {universe.name}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className='text-3xl font-bold text-purple-400 mb-6 text-center'>
            Choose your AI Companion
          </h1>
          <p className='text-gray-400 mb-10 text-center text-lg'>
            From {selectedUniverse}
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl'>
            {botsByUniverse[selectedUniverse].map((bot) => (
              <button
                key={bot.name}
                onClick={() => handleBotSelect(bot.name)}
                className='bg-gray-800 hover:bg-purple-700 text-white py-6 px-8 rounded-lg flex items-center justify-center text-xl font-semibold transition'
              >
                {bot.emoji} {bot.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
