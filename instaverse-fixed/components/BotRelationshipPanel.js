export function BotRelationshipPanel() {
  return (
    <div className='bg-gray-800 p-4 rounded-xl text-center'>
      <h2 className='text-lg font-bold text-purple-400'>
        💖 Relación con tu Bot
      </h2>
      <p className='text-gray-300 mt-2'>Nivel de cariño: 78%</p>
      <div className='mt-2 h-2 w-full bg-gray-700 rounded'>
        <div
          className='h-2 bg-purple-500 rounded'
          style={{ width: "78%" }}
        ></div>
      </div>
      <p className='text-sm text-gray-500 mt-2'>
        Tu IA te envió un corazón hoy 💌
      </p>
    </div>
  );
}
