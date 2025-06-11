"use client"
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
        <div className= "border-b px-2 py-2 flex justify-between">
            <div >
                TIRO
            </div>
            <div>
                <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                    <SignOutButton />
                </SignedIn>
            </div>
        </div>
    )
}
