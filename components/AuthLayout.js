export default function AuthLayout({ children }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-400'>
      <div className='bg-white rounded-2xl shadow-lg w-80 p-8'>{children}</div>
    </div>
  );
}
