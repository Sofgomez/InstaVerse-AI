// pages/dashboard.tsx
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { StoryBar } from "@/components/StoryBar";
import { FeedPost } from "@/components/FeedPost";
import { BottomNavBar } from "@/components/BottomNavBar";
import { BotRelationshipPanel } from "@/components/BotRelationshipPanel";

export default function Dashboard() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className='min-h-screen bg-black text-white flex flex-col'>
      {/* Story Bar */}
      <div className='p-4 border-b border-gray-800'>
        <StoryBar />
      </div>

      {/* Bot Relationship */}
      <div className='p-4'>
        <BotRelationshipPanel />
      </div>

      {/* Feed */}
      <div className='flex-1 overflow-y-auto px-4 pb-20'>
        <FeedPost
          user='You'
          imageUrl='/sample-post.jpg'
          caption='Just posted from the Metaverse ✨'
          reactions={["🔥", "😍", "🤖"]}
        />
        {/* Más posts IA podrían ir aquí */}
      </div>

      {/* Bottom Navigation */}
      <div className='fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800'>
        <BottomNavBar />
      </div>
    </div>
  );
}
