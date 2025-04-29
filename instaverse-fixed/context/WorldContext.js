"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

const WorldContext = createContext();

export function WorldProvider({ children }) {
  const [universe, setUniverse] = useState(null);
  const [character, setCharacter] = useState(null);
  const [friendshipLevel, setFriendshipLevel] = useState(0); // Empieza en 0%
  const router = useRouter();

  const chooseUniverse = (universeName) => {
    setUniverse(universeName);
    router.push("/universe-selection");
  };

  const chooseCharacter = (characterName) => {
    setCharacter(characterName);
    setFriendshipLevel(10); // Empezamos en 10%
    router.push("/dashboard");
  };

  const increaseFriendship = () => {
    setFriendshipLevel((prev) => Math.min(prev + 5, 100));
  };

  const decreaseFriendship = () => {
    setFriendshipLevel((prev) => Math.max(prev - 5, 0));
  };

  return (
    <WorldContext.Provider
      value={{
        universe,
        character,
        friendshipLevel,
        chooseUniverse,
        chooseCharacter,
        increaseFriendship,
        decreaseFriendship,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
}

export const useWorld = () => useContext(WorldContext);
