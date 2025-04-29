import React from "react";
import Image from "next/image";

export function FeedPost({ user, imageUrl, caption, reactions }) {
  return (
    <div className='bg-gray-900 rounded-xl mb-6 overflow-hidden shadow-md'>
      <div className='flex items-center p-4'>
        <div className='w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold'>
          {user.charAt(0)}
        </div>
        <span className='ml-3 text-white font-semibold'>{user}</span>
      </div>
      <Image
        width={500}
        height={300}
        src={imageUrl}
        alt='post'
        className='w-full h-72 object-cover'
      />
      <div className='p-4'>
        <p className='text-gray-300 mb-2'>{caption}</p>
        <div className='flex space-x-2 text-xl'>
          {reactions.map((r, i) => (
            <span key={i}>{r}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
