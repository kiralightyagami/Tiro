import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'


export default async function Page() {    
    const user = await currentUser()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()
  
    if (!user) {
        return redirectToSignIn()
    }


    return (
        <div className= "pt-8 flex justify-center">
            <div className="max-w-4xl bg-white rounded-lg w-full shadow-md p-12">
               <Greeting image={user?.imageUrl || ''} name={user?.fullName || ''} />
            </div>
           
        </div>
    )
}

function Greeting({ image, name }: { image: string, name: string }) {
    return (
        <div className="flex items-center gap-4">
            <img src={image} alt="User" className="w-12 h-12 rounded-full" />
            <div className="text-2xl font-medium">Welcome, {name}</div>
        </div>
    )
}
