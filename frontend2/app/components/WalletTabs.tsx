interface WalletTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function WalletTabs({ activeTab, setActiveTab }: WalletTabsProps) {
  return (
    <div className="border-b border-gray-200 mb-4">
      <div className="flex space-x-6">
        {["Tokens", "NFTs", "Activity"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
} 