"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <SessionProvider>
        <RealHome />
      </SessionProvider>
    </>
  );
}

export function RealHome() {
  const session = useSession();

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-self-start bg-slate-950">
        <nav className="w-full max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <h1 className="text-3xl text-blue-600">Logo</h1>
          <div className="flex">
            {session.status === "authenticated" && (
              <button
                className="text-xl px-4 py-2 bg-gray-800 rounded-lg border-1 border-slate-300 hover:bg-gray-950 transition-all duration-300 ease-in-out"
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
            {session.status === "unauthenticated" && (
              <button
                className="text-xl px-4 py-2 bg-blue-800 rounded-lg  hover:bg-blue-950 transition-all duration-300 ease-in-out"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            )}
          </div>
        </nav>
        {/*  */}
        <div className="w-full max-w-7xl pt-20">
          {session.status === "authenticated" ? (
            <h1 className="text-4xl text-center">
              Welcome Back, {session.data.user?.name}
            </h1>
          ) : (
            <h1 className="text-4xl text-center">Get Started</h1>
          )}
        </div>
      </div>
    </>
  );
}
