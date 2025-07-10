"use client";
import { useState } from "react";
import GenerateWallet from "../components/GenerateWallet";
import WalletCard from "../components/WalletCard";

export default function Dashboard() {
  const [walletGenerated, setWalletGenerated] = useState(false);

  const handleGenerateWallet = () => {
    setWalletGenerated(true);
  };

  if (!walletGenerated) {
    return <GenerateWallet onGenerateWallet={handleGenerateWallet} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="w-full px-4">
        <WalletCard />
      </div>
    </div>
  );
}
