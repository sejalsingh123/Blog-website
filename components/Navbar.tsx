'use client'
import Image from "next/image"
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="w-full bg-[#3f4a3f] px-10 py-6">
      <div className="flex items-center justify-between">
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
        <ul className="hidden md:flex items-center gap-10 text-[#f5e6d3] text-lg">
          <Link href="/" className="hover:opacity-80 cursor-pointer">Home</Link>
          <Link href="/dashboard" className="hover:opacity-80 cursor-pointer">Dashboard</Link>
          <Link href="/logout" className="hover:opacity-80 cursor-pointer">Logout</Link>
          <Link href="/logout" className="hover:opacity-80 cursor-pointer">Login</Link>
          <Link href="/logout" className="hover:opacity-80 cursor-pointer">Signup</Link>
          <Link href="/admin" className="hover:opacity-80 cursor-pointer">Admin</Link>
        </ul>

      </div>
    </nav>
  );
}
