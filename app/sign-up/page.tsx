"use client"

import { signUp, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"



const SignUp = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null)
    const {data, isPending} = useSession()

    // Redirect to home page if already logged in
    useEffect(() => {
      if(!isPending && data?.user){
        router.push('/')
      }
    }, [data, isPending, router])

    // Handle form submission
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setError(null)

        const formData = new FormData(e.currentTarget)
        const res = await signUp.email({
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        })
        if(res.error){
            setError(res.error.message || "Somthing went wrong. Please try agin");
        } else {
            router.push("/")
        }
    }
  return (
    <main className="max-w-md mx-auto p-6 space-y-4 text-black bg-[#a57445] h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full rounded-md  bg-amber-50 border border-neutral-700 px-3 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-md bg-amber-50 border border-neutral-700 px-3 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={8}
          className="w-full rounded-md bg-amber-50 border border-neutral-700 px-3 py-2"
        />
        <button
          type="submit"
          className="w-full bg-amber-50 text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
        >
          Create Account
        </button>
      </form>
    </main>
  )
}

export default SignUp