interface GenerateWalletProps {
  onGenerateWallet: () => void;
}

export default function GenerateWallet({ onGenerateWallet }: GenerateWalletProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 mb-8">Generate your wallet to get started</p>
        <button
          onClick={onGenerateWallet}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Generate Wallet
        </button>
      </div>
    </div>
  );
} 