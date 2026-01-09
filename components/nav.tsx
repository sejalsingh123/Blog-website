'use client'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-500 px-6 py-3">
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
          src="/images/logo.svg"
          width={35}
          height={35}
          alt="logo of website"
          className="mr-3"
          />
          <h1 className="text-black text-lg font-semibold">
            My Blog
          </h1>
        </Link>
        <div className="ml-auto flex gap-6 text-black">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link href="/" className="hover:text-gray-200">SignUp</Link>
        </div>
      </div>
    </nav>
  );
}
