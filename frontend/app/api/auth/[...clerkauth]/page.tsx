import { auth } from '@clerk/nextjs/server'
import prisma from '@/app/prisma/prisma/db'

export default async function Page() {
  const { userId, redirectToSignIn, sessionClaims } = await auth()

  if (!userId) return redirectToSignIn()

  
  const email = sessionClaims?.email as string

  if (email) {
   
    await prisma.user.upsert({
      where: { email },
      update: {},
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

  return {userId}
}