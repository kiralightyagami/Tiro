'use client'
import { useState } from "react"


export default function Assets({publicKey}: {publicKey: string}) {
    const [copied, setCopied] = useState(false)
    return (
        <div className="text-slate-500 mt-4">
            Account assets
            <br />
            <div className="flex justify-between">
                <div></div>
                <div>
                    <button  className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
                        navigator.clipboard.writeText(publicKey)
                        setCopied(true)
                        setTimeout(() => {
                            setCopied(false)
                        }, 2000)
                    }}>
                         {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    )
}

