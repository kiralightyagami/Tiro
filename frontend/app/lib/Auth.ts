import { auth } from '@clerk/nextjs/server'
import prisma from '@/app/prisma/prisma/db'
import { redirect } from 'next/navigation'

export default async function clerkAuth() {
  const { userId, redirectToSignIn, sessionClaims } = await auth()

  if (!userId) return redirectToSignIn()

  
  const email = sessionClaims?.email as string
  const name = sessionClaims?.full_name as string
  const profilePicture = sessionClaims?.picture as string

  if (email) {
   
    await prisma.user.upsert({
      where: { email },
      update: {
        name,
        profilePicture
      },
      create: {
        email,
        id: userId,
        userWallet: {
          create: {
            balance: 0
          }
        },
        cryptoWallet: {
          create: {
            publicKey: '' 
          }
        }
      },
      include: {
        userWallet: true,
        cryptoWallet: true
      }
    })
  }
  return redirect('/dashboard')
}