'use client'
import {
    SignInButton,
    SignOutButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

export default function Appbar() {
    return (
        
            <div className="border-b px-4 py-3 flex justify-between items-center bg-white">
            <div className='text-xl font-bold'>
                TIRO
            </div>
            <div className='flex items-center gap-3'>
                <SignedOut>
                    <SignInButton mode="modal">
                        <span className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
                            Sign In
                        </span>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <span className="px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors cursor-pointer">
                            Sign Up
                        </span>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-3">
                        <UserButton afterSignOutUrl="/" />
                        <SignOutButton>
                            <span className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
                                Sign Out
                            </span>
                        </SignOutButton>
                    </div>
                </SignedIn>
            </div>
        </div>

        )
}
