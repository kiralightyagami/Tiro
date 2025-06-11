'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AuthButtonsProps {
  className?: string;
}

export const SignInButton = ({ className = '' }: AuthButtonsProps) => {
  const pathname = usePathname();
  const isActive = pathname === '/signin';

  return (
    <Link
      href="/signin"
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-gray-100 text-gray-900' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        } ${className}`}
    >
      Sign In
    </Link>
  );
};

export const SignUpButton = ({ className = '' }: AuthButtonsProps) => {
  const pathname = usePathname();
  const isActive = pathname === '/signup';

  return (
    <Link
      href="/signup"
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
        } ${className}`}
    >
      Sign Up
    </Link>
  );
};

export const AuthButtons = ({ className = '' }: AuthButtonsProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <SignInButton />
      <SignUpButton />
    </div>
  );
}; 