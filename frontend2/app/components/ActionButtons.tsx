export default function ActionButtons() {
  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium text-sm transition-colors">
        Send
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium text-sm transition-colors">
        Add Funds
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium text-sm transition-colors">
        Withdraw
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium text-sm transition-colors">
        Swap
      </button>
    </div>
  );
} 