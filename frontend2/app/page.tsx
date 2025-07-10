"use client";
import Navbar from "./components/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div >
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => router.push("/dashboard")}>go to dashboard</button>
      </div>
    </div>

  );
}
