export function Input({ className = '', ...props }) {
  return (
    <input
      className={`block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${className}`}
      {...props}
    />
  )
}
