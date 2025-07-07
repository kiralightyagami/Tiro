import { auth, currentUser } from "@clerk/nextjs/server"
import Assets from "./Assets"


export default async function ProfileCard({publicKey}: {publicKey: string}) {
    const user = await currentUser()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()
  
    if (!user) {
        return redirectToSignIn()
    }


    return (
        <div className= "pt-8 flex justify-center">
            <div className="max-w-2xl bg-white rounded-lg w-full shadow-md p-12">
               <Greeting image={user?.imageUrl || ''} name={user?.fullName || ''} />
               <Assets publicKey={publicKey}/>
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