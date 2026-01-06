import JoinRoom from '@/components/JoinRoom'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div className="min-h-screen w-full bg-gray-100 relative flex items-center justify-center">
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
                    radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
                    radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
                `,
                backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
                }}
            />
            <JoinRoom />
        </div>
    </>
  )
}

export default page