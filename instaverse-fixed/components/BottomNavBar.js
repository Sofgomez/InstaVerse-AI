import {
  Home,
  MessageCircle,
  UserPlus,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react";

export function BottomNavBar() {
  const buttons = [
    { icon: <Home size={22} />, label: "Post" },
    { icon: <MessageCircle size={22} />, label: "DMs" },
    { icon: <UserPlus size={22} />, label: "Followers" },
    { icon: <Globe size={22} />, label: "Universes" },
    { icon: <Award size={22} />, label: "Missions" },
    { icon: <TrendingUp size={22} />, label: "Fame" },
  ];

  return (
    <div className='flex justify-around items-center py-3 text-white'>
      {buttons.map((btn, i) => (
        <div
          key={i}
          className='flex flex-col items-center text-sm hover:text-purple-400'
        >
          {btn.icon}
          <span className='mt-1 text-xs'>{btn.label}</span>
        </div>
      ))}
    </div>
  );
}
