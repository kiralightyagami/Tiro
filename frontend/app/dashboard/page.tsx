import { auth } from '@clerk/nextjs/server'
import ProfileCard from '@/app/components/ProfileCard'
import prisma from '@/app/prisma/prisma/db'

async function getUserWallet() {
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    const userWallet = await prisma.cryptoWallet.findFirst({
        where: {
            userId: userId
        }
    })


    return {userWallet, error: null}
}

export default async function() {  
    const userWallet = await getUserWallet()

    if (!userWallet || !userWallet.userWallet?.publicKey) {
        return <div>No wallet found</div>
    }

    return(
        <div>
            <ProfileCard publicKey={userWallet.userWallet?.publicKey}/>
        </div>
    )
}
