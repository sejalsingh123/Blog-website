'use client'

import Image from "next/image"
import Link from "next/link";
import { signOut, useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'


export default function Navbar() {
  const {data: session} = useSession();
  const router = useRouter();
  return (
    <nav className="w-full bg-[#3f4a3f] px-10 py-6">
      <div className="flex items-center justify-between">
        {/* logo and title */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.svg" 
              alt="logo"
              width={48}
              height={48}
            />
            <div className="text-[#f5e6d3] leading-tight">
              <h1 className="text-2xl font-serif font-semibold">
                All Blogs
              </h1>
              <p className="text-sm tracking-widest uppercase">
                My All Blog
              </p>
            </div>
          </div>
        </Link>
        {/* navigation links */}
        <ul className="hidden md:flex items-center gap-10 text-[#f5e6d3] text-lg">
          <Link href="/" className="hover:opacity-80 cursor-pointer">Home</Link>
          {session?.user ? (
            <>
              <span className="hover:opacity-80 cursor-pointer">Welcome, {session.user.email}</span>
              <button
                className="bg-neutral-900 px-4 py-2 rounded hover:opacity-80 cursor-pointer"
                onClick={async() => {await signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/")
                    }
                  }
                })}}
              >Logout</button>
            </>
          ):(
            <>
              <Link href="/sign-in" className="hover:opacity-80 cursor-pointer">Login</Link>
              <Link href="/sign-up" className="hover:opacity-80 cursor-pointer">Signup</Link>
            </>
          )}
          
        
        </ul>

      </div>
    </nav>
  );
}
