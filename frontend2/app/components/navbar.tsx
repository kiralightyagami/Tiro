"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-2xl font-bold">Tiro</h1>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Signup</button>
      </div>
    </nav>
  );
}

