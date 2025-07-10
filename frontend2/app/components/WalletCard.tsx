"use client";
import { useState } from "react";
import ActionButtons from "./ActionButtons";
import WalletTabs from "./WalletTabs";
import WalletContent from "./WalletContent";

export default function WalletCard() {
  const [activeTab, setActiveTab] = useState("Tokens");

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Welcome back, Asvin!</h2>
        </div>
      </div>

      {/* Account Assets Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
          </svg>
          <span className="text-gray-600 font-medium text-sm">TipLink Account Assets</span>
        </div>

        {/* Balance Display */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-gray-900">$0.00 <span className="text-lg text-gray-500">USD</span></div>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
            </svg>
            <span className="text-xs text-gray-600">Your Wallet Address</span>
          </div>
        </div>

        {/* Action Buttons */}
        <ActionButtons />

        {/* Tabs */}
        <WalletTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content */}
        <WalletContent />
      </div>
    </div>
  );
} 