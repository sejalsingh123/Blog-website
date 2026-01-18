'use client'

import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Dashboard = () => {
  const {data, isPending} = useSession()
  const router = useRouter()


  // Redirect to sign-in if not admin
  useEffect(() => {
    if(!isPending && (!data?.user || (data.user as any).role !== 'ADMIN')){
      router.push('/sign-in')
    }
  }, [data, isPending, router])

  // Show loading state while checking session
  if(isPending || !data?.user) return <div>Loading...</div>

  // next logic for admin dashboard

  return (
    <div>
      <h1 className='text-3xl font-bold'>Admin Dashboard Page</h1>
      <p>Welcome, {data.user.email}</p>
    </div>
  )
}

export default Dashboard