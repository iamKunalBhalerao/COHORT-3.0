"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signinHandler = async () => {
    await axios.post("http://localhost:3000/api/v1/auth/signin", {
      email,
      password
    })
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-slate-950">
        <div className="w-lg px-4 py-3 flex flex-col itesm-center justify-center bg-slate-900 rounded-lg border-1 border-slate-500">
          <h1 className="text-4xl font-bold text-center my-4">Sign In</h1>
          <div className="flex flex-col gap-4 my-4">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="text-xl p-2 bg-slate-800 rounded-lg outline-0 active:outline-1 active:outline-slate-700 border-1 border-slate-600" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="text-xl p-2 bg-slate-800 rounded-lg outline-0 active:outline-1 active:outline-slate-700 border-1 border-slate-600" />
          </div>
          <button onClick={signinHandler} className="text-xl cursor-pointer text-white w-full py-2 bg-blue-800 rounded-xl border-0">Sign In</button>
          <p className="py-4">Dont have an account? <Link href={"/signup"} className="text-blue-600">Signup</Link></p>
        </div>
      </div>
    </>
  )
}

export default Page
