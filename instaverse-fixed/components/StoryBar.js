import Image from "next/image";

export function StoryBar() {
  const stories = [
    { name: "Metaverso", image: "/universes/metaverse.jpg" },
    { name: "Hogwarts", image: "/universes/hogwarts.jpg" },
    { name: "2045", image: "/universes/future.jpg" },
    { name: "Star Wars", image: "/universes/starwars.jpg" },
  ];

  return (
    <div className='flex space-x-4 overflow-x-auto'>
      {stories.map((story, i) => (
        <div key={i} className='flex flex-col items-center'>
          <div className='w-16 h-16 rounded-full border-2 border-purple-500 overflow-hidden'>
            <Image
              width={64}
              height={64}
              src={story.image}
              alt={story.name}
              className='w-full h-full object-cover'
            />
          </div>
          <span className='text-xs text-gray-400 mt-1'>{story.name}</span>
        </div>
      ))}
    </div>
  );
}
